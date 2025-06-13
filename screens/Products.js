import React, {use, useEffect, useState} from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProductCard from "../components/ProductCard";

import { Picker } from "@react-native-picker/picker"; 

const categoryNames = {
    "": "All",
    "68483e783bfc3bc5fa69adab": "Trappistenkaas",
    "68483de200fa4030661cfe5b": "Trappistenbier",
    "68483dbc3ad7f8b7cfb809b6": "Fruitbier",
};



const Products = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

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
                    category:
                    categoryNames[item.product.fieldData.category[0]] || "Other",
                }))
            )
        )
        .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Products</Text>
            <ScrollView style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCategory}
                    onValueChange={setSelectedCategory}
                    style={styles.picker}
                    >
                        <Picker.Item label="All Categories" value="" />
                        {[...new Set(products.map((product) => product.category))].map((category) => (
                            <Picker.Item key={category} label={category} value={category} />
                        ))}
                    </Picker>
                <View style={styles.productList}>
                    {filteredProducts.map(((product) => (
                        <TouchableOpacity
                            key={product.id}
                            onPress={() => navigation.navigate("ProductDetail", { product })}
                        >
                            <ProductCard
                                image={product.image}
                                name={product.name}
                                price={`€${product.price.toFixed(2)}`}
                            />
                        </TouchableOpacity>
                    )))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    cardContainer: {
        flex: 1,
    },
    productList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});

export default Products;