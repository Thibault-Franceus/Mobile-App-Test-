import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileRow({ title, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Ionicons name="chevron-forward" size={24} color="#888" />
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingVertical: 18,
    paddingHorizontal: 8,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#eee",
    alignSelf: "center",
  },
});