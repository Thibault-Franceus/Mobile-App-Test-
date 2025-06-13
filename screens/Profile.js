import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProfileRow from "../components/ProfileRow";
import FloatingCartButton from "../components/FAB";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://live.staticflickr.com/8098/8595551923_710da2fc53_z.jpg" }} 
          style={styles.avatar}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#222" }}>
          David
        </Text>
      </View>
      <ProfileRow
        title="Instellingen"
        onPress={() => navigation.navigate("Settings")}
      />
      <ProfileRow
        title="Laatste bestellingen"
      />
      <ProfileRow
        title="Favorieten"
      />
      <ProfileRow
        title="Contact"
      />
      <FloatingCartButton />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
  avatarContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});