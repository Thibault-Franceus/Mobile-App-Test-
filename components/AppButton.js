import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const PrimaryButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.primary, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export const SecondaryButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.secondary, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
    secondary: {
        backgroundColor: "#f0f0f0",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
    },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});