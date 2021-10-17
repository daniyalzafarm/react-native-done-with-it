import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
      />
      <View style={styles.productDetails}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/favicon.png")}
            title="Daniyal Zafar"
            subTitle="8 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  productDetails: {
    padding: 15,
  },
  title: {
    paddingBottom: 7,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 70,
  },
});
export default ListingDetailScreen;
