import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { PrimaryButton, SecondaryButton } from "../components/AppButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
});

export default HomeScreen;