import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const BlogDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.meta}>
        {item.author} • {item.date}
      </Text>
      {item.summary ? (
        <Text style={styles.summary}>{item.summary}</Text>
      ) : null}
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : null}
      <Text style={styles.content}>{item.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },
  meta: {
    fontSize: 14,
    color: "#888",
    marginBottom: 12,
  },
  summary: {
    fontSize: 16,
    color: "#444",
    marginBottom: 16,
    fontStyle: "italic",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 18,
    backgroundColor: "#eee",
  },
  content: {
    fontSize: 16,
    color: "#222",
    lineHeight: 24,
  },
});

export default BlogDetail;