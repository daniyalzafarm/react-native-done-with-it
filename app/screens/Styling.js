import React from 'react';
import { Text, View } from 'react-native';

function Styling(props) {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View style={{
                width: 100,
                height: 100,
                backgroundColor: "dodgerblue",
                borderWidth: 5,
                borderColor: "royalblue",
                borderRadius: 10,
                borderTopLeftRadius: 50,

                //Shadows for IOS
                shadowColor: "grey",
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 10,
                shadowRadius: 10,

                //Shadow for android
                elevation: 10,

                //Padding
                padding: 20,
                paddingHorizontal: 10,
                paddingLeft: 30
            }}>
                <View
                    style={{
                        backgroundColor: "gold",
                        width: 50,
                        height: 50,
                    }}
                ></View>
            </View>
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 100,
                    height: 100,

                    //Margin
                    margin: 20,
                    marginBottom: 0,
                    marginHorizontal: 0,
                }}
            ></View>

            <View>
                <Text style={{
                    fontFamily: "",
                    fontSize: 30,
                    fontStyle: "italic",
                    fontWeight: "800",
                    color: "tomato",
                    textTransform: "capitalize",
                    textAlign: "center",
                    lineHeight: 60,

                }}>
                    I love React Native ! This is my practice Styling. Here is some more text
                    </Text>
            </View>
        </View>
    );
}

export default Styling;