import React from 'react';
import { View, StatusBar } from 'react-native'
function Alignment(props) {
    return (
        <View
            style={
                {
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    backgroundColor: '#fff',
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-evenly", //Main / Primary Axis
                    alignItems: "center", // Secondary Axis
                    flexWrap: "wrap",
                    alignContent: "center",
                }
            }
        >
            <View
                style={
                    {
                        backgroundColor: 'dodgerblue',
                        width: 100,
                        height: 200,
                    }
                } />
            <View
                style={
                    {
                        backgroundColor: 'orange',
                        width: 100,
                        height: 100
                    }
                } />
            <View
                style={
                    {
                        backgroundColor: 'brown',
                        width: 100,
                        height: 100
                    }
                } />
            <View
                style={
                    {
                        backgroundColor: 'dodgerblue',
                        width: 100,
                        height: 100
                    }
                } />
            <View
                style={
                    {
                        backgroundColor: 'orange',
                        width: 100,
                        height: 100
                    }
                } />
            <View
                style={
                    {
                        backgroundColor: 'brown',
                        width: 100,
                        height: 100
                    }
                } />
        </View>

    );
}

export default Alignment;