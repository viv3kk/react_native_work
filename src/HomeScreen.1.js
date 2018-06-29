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

    takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          CameraRoll.saveToCameraRoll( data.uri )
          console.log(data.uri);
        }
    };


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

            </View>
        );
    }
}

export default HomeScreen;