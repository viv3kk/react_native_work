import React from 'react';
import { StyleSheet, View, WebView, BackHandler, Platform, ActivityIndicator } from 'react-native';

//import WebViewBridge from 'react-native-webview-bridge';



const HtmlPage = require('./index.html');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })

class WebViewScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            platform:Platform.OS
        }
    }
    webView = {
        canGoBack: false,
        ref: null,
        postMessage: function(){}
    }
    
    onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
        this.webView.ref.goBack();
        return true;
    }
    return false;
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
          BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
        }
    }

    componentDidMount() {
        // this.watchId = navigator.geolocation.watchPosition(
        //     (position) => {
        //         this.setState({
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //             error: null,
        //         },()=>{
        //             this.webView.ref.postMessage(JSON.stringify(this.state));
        //         });
        //     },
        //     (error) => this.setState({ error: error.message }),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 0 },
        // );

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
        
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress');
        }

    }

    

    renderLoading(){ return(<View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
      </View>); }

    msgHandler(event){
        console.log("msgHandler-->" + event.nativeEvent.data)
    }
    render() {
        
        //const uri_source = 'http://project03.vivek.26.blrsoftware.com/GENIO_LITE/genio_lite/#/';
        const uri_source = 'http://project01.vivek.26.blrsoftware.com/GENIO_LITE/genio_lite/#/';

        return (

            <WebView
                source={{uri:uri_source}}
                //source={HtmlPage}
                style={{ marginTop: 2 }}
                onMessage={this.msgHandler.bind(this)}
                domStorageEnabled={true}
                ref={(webView) => { this.webView.ref = webView; }}
                renderLoading={this.renderLoading.bind(this)}
                onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
                startInLoadingState
            />
                
        );
    }
}



export default WebViewScreen