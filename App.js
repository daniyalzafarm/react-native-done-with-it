// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Alert,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Button,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Alignment from "./app/screens/Alignment";
import Orientation from "./app/screens/Orientation";
import Touchable from "./app/screens/Touchable";
import Styling from "./app/screens/Styling";
import alignment from "./app/screens/Alignment";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigation from "./app/navigation/AuthNavigation";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import OfflineNotice from "./app/components/OfflineNotice";
//Inputs For App Picker
// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

export default function App() {
  // const unsubscribe = NetInfo.addEventListener((netinfo) =>
  //   console.log(netinfo)
  // );
  // unsubscribe();
  // const netInfo = useNetInfo();
  // console.log(netInfo.isConnected);
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {/* <AuthNavigation /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

//ImagePicker
// export default function App() {
//   const [imageUris, setImageUris] = useState([]);
//   const handleAdd = (uri) => {
//     setImageUris([...imageUris, uri]);
//   };
//   const handleRemove = (uri) => {
//     setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
//   };

//   return (
//     <Screen>
//       {/* <Button title="Select Images" onPress={selectImage} />
//       <Image source={{ uri: imageUri }} style={{ width: 300, height: 500 }} /> */}

//       <ImageInputList
//         imageUris={imageUris}
//         onAddImage={handleAdd}
//         onRemoveImage={handleRemove}
//       />
//     </Screen>
//   );
// }
