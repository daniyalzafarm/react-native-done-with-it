import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/image.jpg")}
    >
      <View style={styles.logoContainer}>
        <MaterialIcons name="store" size={100} color={colors.mehroon} />
        {/* <Image resizeMode="contain" style={styles.logo} source={require("../assets/favicon.png")} /> */}
        <Text style={styles.tagline}>My first App Welcome Screen</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color={"darkbrown"}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    color: "#231411",
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});
export default WelcomeScreen;
