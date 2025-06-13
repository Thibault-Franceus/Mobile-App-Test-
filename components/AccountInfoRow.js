import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AccountInfoRow({ title, value, onEdit}) {
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
            { onEdit && (
                <TouchableOpacity onPress={onEdit} style={styles.editButton}>
                    <Text style={styles.editText}>Pas aan</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
    value: {
        fontSize: 14,
        color: "#666",
    },
    editButton: {
        padding: 8,
    },
    editText: {
        fontSize: 14,
        color: "#007bff",
    },
});