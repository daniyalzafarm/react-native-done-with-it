import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from "../config/colors";
import { Ionicons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.close} onPress={() => console.log("Close")}>
                <Ionicons name="md-close" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={() => console.log("Close")}>
                <Ionicons name="md-trash-sharp" size={40} color="red" />
            </TouchableOpacity>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/stair.jpg")}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    close: {
        position: "absolute",
        top: 25,
        left: 15
    },
    delete: {
        position: "absolute",
        top: 25,
        right: 15
    },
    image: {
        marginTop: 20,
        width: "100%",
        height: "100%"
    }
})
export default ViewImageScreen;