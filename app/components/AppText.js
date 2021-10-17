import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from "../config/style";

function AppText({ children, style, ...otherprops }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherprops}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // text: {
  // fontSize: 24,
  // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  // color: "black",
  // ...Platform.select({
  //     ios: {
  //         fontSize: 20,
  //         fontFamily: "Avenir",
  //     },
  //     android: {
  //         fontSize: 20,
  //         fontFamily: "Roboto",
  //     }
  //     })
  // }
});
export default AppText;
