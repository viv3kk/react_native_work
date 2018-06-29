'use strict';
import React from 'react';
import { StyleSheet,View, Text, Button, ScrollView,CameraRoll,Image,Platform,PermissionsAndroid,Dimensions,TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
});

class HomeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            photos:[],
            platform:Platform.OS
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
               
                <Text>HomeScreen</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>
                        navigate('WebView', { name: 'Jane' })
                    }
                />

                <Button
                    title="Go to Camera"
                    onPress={() =>
                        navigate('Camera', { name: 'Jane' })
                    }
                />

                <Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />

            </View>
        );
    }
}

export default HomeScreen;