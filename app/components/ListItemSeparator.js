import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ListItemSeparator(props) {
    return (
        <View style={styles.seperator} />
    );
}
const styles = StyleSheet.create({
    seperator: {
        width: "80%",
        height: 1,
        backgroundColor: colors.light,
        alignSelf: "center"
    }
})
export default ListItemSeparator;