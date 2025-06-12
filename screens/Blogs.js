import React, {use, useEffect, useState} from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import BlogCard from "../components/BlogCard";

const Blogs = ({ navigation }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.webflow.com/v2/sites/67b2f6b04b3860ceb9157814/collections/684805d7a1ec61226acdc067/items",
            {
                headers: {
                    Authorization: 
                    "Bearer 9459b25cd2659f2391c7510c4bb9084fc990188e2550f14528ebe65bb22f2b4c",
                },
                }
        )
        .then((res) => res.json())
        .then((data) => 
            setBlogs(
                data.items.map((item) => ({
                    id: item.id,
                    name: item.fieldData.name,
                    date: item.fieldData.date,
                    image: item.fieldData["thumbnail-image"]?.url,
                    author: item.fieldData.author,
                    summary: item.fieldData["blog-summary"],
                    content: item.fieldData["blog-content"],
                }))
            )
        )
        .catch((error) => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Blogs</Text>
            <ScrollView style={styles.cardContainer}>
                <View style={styles.blogList}>
                    {blogs.map(((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => navigation.navigate("BlogDetail", { item })}
                        >
                            <BlogCard
                                image={item.image}
                                name={item.name}
                                author={item.author}
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
    blogList: {
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});

export default Blogs;