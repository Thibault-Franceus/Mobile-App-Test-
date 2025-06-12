import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProductCard from "../components/ProductCard";
import { PrimaryButton, SecondaryButton } from "../components/AppButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.overlayButton}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={{ fontSize: 20, color: "Black" }}>View Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.overlayButton}
        onPress={()=> navigation.navigate("Blogs")}
      >
      
        <Text style={{ fontSize: 20, color: "Black" }}>View Blogs</Text>
      </TouchableOpacity>
      <SecondaryButton
        title="Contact"
        onPress={() => navigation.navigate("Contact")}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  overlayButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 15,
    marginVertical: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;