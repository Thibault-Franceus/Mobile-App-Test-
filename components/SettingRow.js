import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function SettingRow({ title, value, onValueChange }) {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <Switch value={value} onValueChange={onValueChange} 
            thumbColor={value ? "#d9a64d" : "#ccc"} 
            trackColor={{ false: "#ccc", true: "#d9a64d" }}
            />
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
});