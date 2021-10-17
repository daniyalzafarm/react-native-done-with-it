import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/style";

function AppTextInput({ iconName, width = "100%", ...otherprops }) {
  return (
    <View style={[styles.container, { width }]}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[styles.text, defaultStyles.text]}
        {...otherprops}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  // textInput: {
  //     fontSize: 18,
  //     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  // },
  icon: {
    margin: 5,
    marginRight: 10,
  },
  text: {
    width: "100%",
  },
});
export default AppTextInput;
