import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, Alert, Platform, StatusBar, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, SafeAreaView, Button } from 'react-native';

function Touchable(props) {

    const handlepress = () => console.log('Text Pressed')

    return (
        <View style={styles.container}>
            <Text style={{ padding: 20 }} numberOfLines={1} onPress={handlepress}>Hello React native App</Text>
            <TouchableHighlight onPress={() => console.log('Image Tapped')}>
                <Image style={{ borderRadius: 20 }}
                    blurRadius={5}
                    fadeDuration={2000}
                    source={{
                        width: 200,
                        height: 300,
                        uri: 'https://picsum.photos/200/300',
                    }} />
            </TouchableHighlight>
            <Button
                color='dodgerblue'
                title="CLick Me"
                // onPress={() => Alert.prompt("Question", "Enter Your Name : ", text => console.log(text))}  **Prompt Cant be Used For Android**

                onPress={() => Alert.alert(
                    "MyTitle",
                    "My Message",
                    [{ text: "No", onPress: () => console.log('No Pressed') },
                    { text: "Yes", onPress: () => console.log('Yes Pressed') }]
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',


        justifyContent: 'center',
        //Platform Specific Code
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
export default Touchable;