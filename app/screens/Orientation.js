import React from 'react';
import { View } from 'react-native'
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
function Orientation(props) {
    const { landscape } = useDeviceOrientation();
    return (
        //*** Orientation Specific COde ***/
        <View
            style={
                {
                    backgroundColor: "dodgerblue",
                    width: "100%",
                    height: landscape ? "100%" : "30%"
                }
            }>
        </View>
    );
}

export default Orientation;