import React from "react";
import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { PrimaryButton, SecondaryButton } from "../components/AppButton";
import ProductCard from "../components/ProductCard";
import FloatingCartButton from "../components/FAB";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
          fetch(
              "https://api.webflow.com/v2/sites/67b2f6b04b3860ceb9157814/products",
              {
                  headers: {
                      Authorization: 
                      "Bearer 9459b25cd2659f2391c7510c4bb9084fc990188e2550f14528ebe65bb22f2b4c",
                  },
                  }
          )
          .then((res) => res.json())
          .then((data) => 
              setProducts(
                  data.items.map((item) => ({
                      id: item.product.id,
                      name: item.product.fieldData.name,
                      price: (item.skus[0].fieldData.price.value || 0)/ 100,
                      image: item.skus[0]?.fieldData["main-image"]?.url ,
                      description: item.product.fieldData.description,
                  }))
              )
          )
          .catch((error) => console.error("Error fetching products:", error));
      }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi David</Text>
      <Text style={styles.subHeader}>Welcome back!</Text>
      <View style={styles.promoContainer}>
        <Text style={styles.promoTitle}>Exclusive Offer Just for You!</Text>
        <Text style={styles.promoText}>
          Enjoy a special discount on your next purchase. Use code: DAVID20
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Last Viewed Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.slice(0,4).map((product) => (
        <TouchableOpacity
          key={product.id}
          onPress={() => navigation.navigate("ProductDetail", { product})}
          >
            <ProductCard
              image={product.image}
              name={product.name}
              price={`€${product.price.toFixed(2)}`}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FloatingCartButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f6f6f6",
  paddingHorizontal: 20,
  paddingTop: 40,
},

header: {
  fontSize: 28,
  fontWeight: "bold",
  color: "#222",
  marginBottom: 2,
  letterSpacing: 0.5,
},

subHeader: {
  fontSize: 18,
  color: "#888",
  marginBottom: 18,
},

promoContainer: {
  backgroundColor: "#ffe6b3",
  borderRadius: 18,
  padding: 22,
  marginBottom: 28,
  alignItems: "flex-start",
  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.07,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
},

promoTitle: {
  fontSize: 30,
  fontWeight: "bold",
  color: "#d9a64d",
  marginBottom: 6,
},

promoText: {
  fontSize: 16,
  color: "#222",
  marginBottom: 4,
},

sectionTitle: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#222",
  marginBottom: 12,
  marginTop: 10,
},
});

export default HomeScreen;