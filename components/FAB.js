import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Modal, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useCart } from "../context/CartContext";
import { PrimaryButton } from "./AppButton";


export default function FloatingCartButton({ children }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="cart" size={32} color="#fff" />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View>
                {cart.length === 0 ? (
                    <Text>Je winkeldmandje is leeg.</Text>
                ) : (
                    cart.map(item => (
                        <View key={item.id} style={{marginBottom:12}}>
                            <Text>{item.name} - {item.quantity} x €{item.price.toFixed(2)}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                <Ionicons name="trash" size={24} color="#d9534f" />
                            </TouchableOpacity>
                        </View>
                    ))
                )}
                <View style={{marginTop: 12}}>
                    <Text>Totaal: €{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</Text>
                </View>
            </View>
            <PrimaryButton title="Afrekenen" onPress={() => {
                setModalVisible(false);
            }} />   
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={28} color="#222" />
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 24,
    bottom: 32,
    backgroundColor: "#d9a64d",
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 100,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 24,
    minHeight: 300,
  },
  closeButton: {
    position: "absolute",
    right: 12,
    top: 12,
    zIndex: 10,
  },
});