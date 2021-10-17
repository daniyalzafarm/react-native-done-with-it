import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundcolor: colors.primary,
    },
    TargetScreen: "Listings",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundcolor: colors.secondary,
    },
    TargetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/daniyal.jpg")}
          title="Muhammad Daniyal Zafar"
          subTitle="daniyalzafar@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundcolor}
                />
              }
              onPress={() => navigation.navigate(item.TargetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        title="Log Out"
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default AccountScreen;
