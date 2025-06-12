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
    backgroundColor: "#d9a64d",
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderWidth: 1,
    borderColor: "#32343a",
  },
    secondary: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 42,
        borderWidth: 1,
        borderColor: "#32343a",
    },
  buttonText: {
    color: "#32343a",
    fontSize: 16,
    fontWeight: "bold",
  },
});