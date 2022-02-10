import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
// import * as Location from "expo-location";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/Form";
import FormImagePicker from "../components/Form/FormImagePicker";
import Screen from "../components/Screen";

import listingApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast 1 image."),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", iconName: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", iconName: "email" },
  { label: "Cameras", value: 3, backgroundColor: "blue", iconName: "lock" },
  { label: "Cars", value: 4, backgroundColor: "red", iconName: "apps" },
  { label: "Games", value: 5, backgroundColor: "green", iconName: "email" },
  { label: "Sports", value: 6, backgroundColor: "blue", iconName: "lock" },
  {
    label: "Music and Movies",
    value: 7,
    backgroundColor: "red",
    iconName: "apps",
  },
  { label: "Books", value: 8, backgroundColor: "green", iconName: "email" },
  { label: "Other", value: 9, backgroundColor: "blue", iconName: "lock" },
];
function ListingEditScreen(props) {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(listing, (prog) => {
      setProgress(prog);
      // console.log(progress);
    });

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    // alert("Sucess");
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
