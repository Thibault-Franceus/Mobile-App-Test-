import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import SettingRow from "../components/SettingRow";

export default function Settings(){
    const [notfications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [location, setLocation] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Instellingen</Text>
            <SettingRow 
                title="Notificaties"
                value={notfications}
                onValueChange={setNotifications}
            />
            <SettingRow 
                title="Donkere modus"
                value={darkMode}
                onValueChange={setDarkMode}
            />
            <SettingRow 
                title="Locatie delen"
                value={location}
                onValueChange={setLocation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});
