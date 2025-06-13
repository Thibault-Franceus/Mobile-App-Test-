import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AccountInfoRow from "../components/AccountInfoRow";
import { PrimaryButton } from "../components/AppButton";

export default function MyProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mijn Profiel</Text>
            </View>
            <View style={styles.infoContainer}>
            <AccountInfoRow 
                title="Naam"
                value="David"
            />
            <AccountInfoRow 
                title="E-mail"
                value="david@thomasmore.be"
                />
            <AccountInfoRow
                title="Wachtwoord"
                value="********"
                onEdit={() => navigation.navigate("ChangePassword")}
            />
            </View>
            <View>
                <PrimaryButton 
                    title="Uitloggen"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    header: {
        marginBottom: 24,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#222",
    },
    infoContainer: {
        marginBottom: 32,
    },
});