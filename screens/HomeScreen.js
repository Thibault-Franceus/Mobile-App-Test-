import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Westmalle Tripel",
    description: "€4,50",
    image: "https://www.trappistwestmalle.be/wp-content/uploads/2023/03/Westmalle-Tripel-e1679067890610.png",
  },
  {
    id: 2,
    name: "Westmalle Dubbel",
    description: "€3,50",
    image: "https://www.trappistwestmalle.be/wp-content/uploads/2023/03/Westmalle-Dubbel-e1679067974684-616x1024.png",
  },
  {
    id: 3,
    name: "Westmalle Extra",
    description: "€3,50",
    image: "https://www.trappistwestmalle.be/wp-content/uploads/2023/03/Glas-met-fles-e1717663945824-608x1024.png",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          onPress={() => navigation.navigate('ProductDetail', { product })}
        >
          <ProductCard
            image={product.image}
            name={product.name}
            description={product.description}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
});

export default HomeScreen;