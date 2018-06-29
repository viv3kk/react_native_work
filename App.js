
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import WebViewScreen from './src/WebViewScreen';
import WorkingCam from './src/WorkingCam';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Remote debugger is in a background', 'Module RCTImageLoader']);






const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    WebView: WebViewScreen,
    Camera : WorkingCam
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return (    
        <RootStack />

    ) ;
  }
}