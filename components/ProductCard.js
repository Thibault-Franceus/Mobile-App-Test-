import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const ProductCard = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
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
    width: 160,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  price: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
});

export default ProductCard;
