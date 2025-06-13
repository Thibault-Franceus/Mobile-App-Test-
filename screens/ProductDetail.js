import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import { PrimaryButton } from "../components/AppButton";
import { useCart } from "../context/CartContext";
import FloatingCartButton from "../components/FAB";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();

  
  const price = parseFloat(
    (product.price ?? product.description ?? "0").toString().replace(/[^\d,.-]/g, '').replace(',', '.')
  ) || 0;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>€{price.toFixed(2)}</Text>

      <View style={styles.quantityRow}>
        <TouchableOpacity style={styles.squareButton} onPress={decreaseQuantity}>
          <Text style={styles.squareButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.squareButton} onPress={increaseQuantity}>
          <Text style={styles.squareButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <PrimaryButton 
        title="Toevoegen aan winkelwagentje"
        onPress={() => addToCart(product, quantity)}
      />

      <Text style={styles.descTitle}>Beschrijving</Text>
      <Text style={styles.description}>{product.description}</Text>
      <FloatingCartButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 24,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 12,
    marginTop: 24,
    marginBottom: 16,
    alignSelf: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 6,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "#888",
    marginBottom: 18,
    textAlign: "center",
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  squareButton: {
    width: 40,
    height: 40,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  squareButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    minWidth: 30,
    textAlign: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  descTitle: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#444",
    marginBottom: 10,
  },
});

export default ProductDetail;