import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/style";
import AppText from "./AppText";
import AppButton from "./AppButton";
import PickerItem from "./PickerItem";
import colors from "../config/colors";

function AppPicker({
  icon,
  placeholder,
  onSelectItem,
  selectedItem,
  items,
  width = "100%",
  PickerItemComponent = PickerItem,
  numberOfColumns,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {/* Starting Icon */}
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.black}
              style={styles.icon}
            />
          )}

          {/* Selected Item */}

          {selectedItem ? (
            <AppText style={[defaultStyles.text, styles.textInput]}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          {/* <AppText style={[defaultStyles.text, styles.textInput]}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText> */}

          {/* Down Arrow */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <AppButton title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false), onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    alignSelf: "center",
    color: colors.black,
  },
  icon: {
    margin: 5,
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
});
export default AppPicker;
