import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BlogCard = ({ image, name, author }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: "100%",
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: "#ddd",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#222",
  },
  author: {
    fontSize: 14,
    color: "#666",
  },
});

export default BlogCard;