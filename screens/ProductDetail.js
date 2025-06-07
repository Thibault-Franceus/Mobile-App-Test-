
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);



  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantitTexty}>{quantity}</Text>

        <TouchableOpacity onPress={increaseQuantity}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>

    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    width: 200,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
});

export default ProductDetail;