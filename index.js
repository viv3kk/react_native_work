import { AppRegistry,Platform,PermissionsAndroid } from 'react-native';
import App from './App';

if(Platform.OS === 'android'){
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
    .then(res => {
        if(res !== 'granted') {
            Alert.alert('Oops!', 'We need permission to access your camera to scan codes')
        } 
        //else navigate('Scanner');
    });
} else {
    if(Camera){
        Camera.checkDeviceAuthorizationStatus()
        .then(access => {
            if(!access) {
                Alert.alert('Oops!', 'We need permission to access your camera to scan codes')
            } 
            //else navigate('Scanner');
        });
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
