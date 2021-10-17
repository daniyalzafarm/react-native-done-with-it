import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

import colors from "../config/colors";

import listingApi from "../api/listings";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Jacket For Sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Stair For Sale",
//     price: 200,
//     image: require("../assets/stair.jpg"),
//   },
// ];

function ListingScreen({ navigation }) {
  // Moved in Hook
  // const [listings, setListings] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const {
  //   data: listings,
  //   error,
  //   loading,
  //   request: loadListings,
  // } = useApi(listingApi.getListings);
  // console.log("Listing Screen");

  const getListingApi = useApi(listingApi.getListings);

  useEffect(() => {
    getListingApi.request();
  }, []);
  // console.log("Requested");
  const loadListings = async () => {
    // useApi.setLoading(true);
    const response = await listingApi.getListings();
    // useApi.setLoading(false);

    if (!response.ok) {
      setError(true);
    }
    setError(false);
    console.log(response.data);
    setListings(response.data);
    console.log("Data Fetched");
  };
  return (
    <Screen style={styles.screen}>
      {getListingApi.error && (
        <>
          <AppText>Could'nt Load the Listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={getListingApi.loading} />
      <FlatList
        data={getListingApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageURL={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
export default ListingScreen;
