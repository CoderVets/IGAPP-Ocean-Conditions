import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView
} from 'react-native';

import storeFactory from '../../src/store';
// import {
//   addError,
//   clearError,
//   isFetching,
//   notFetching,
//   getAirTemp,
//   getCur,
// } from '../../src/actions'
import * as fetching from '../../src/actions'
import { connect } from 'react-redux'
import AirTempTest, {airTemp} from "./airTempTest";
import { Provider } from 'react-redux';
import Geo from './geo';
import Watertemp from './waterTemp'
import DispalyVis from './visibility'
import WindDir from './windDirection'
import WindSpeed from './windSpeed'
import WindGust from './windGust'
import CurrentSpeed from './currentSpeed'
import CurrentDirection from './currentDirection'
import SurfaceHeight from './surfaceHeight'
import OceanTide from './oceanTide'
//import SplashScreen from 'react-native-splash-screen'

const store = storeFactory();
var storeprops = {airTemp}
console.log("Store props = "+storeprops)

export default class mainPage extends Component{
  componentWillMount() {
    store.dispatch(
      fetching.getAirTemp()
    );
    store.dispatch(
      fetching.getCur()
    );
    store.dispatch(
      fetching.getHeight()
    );
    store.dispatch(
      fetching.getTide()
    );
    store.dispatch(
      fetching.getVis()
    );
    store.dispatch(
      fetching.getWaterTemp()
    );
    store.dispatch(
      fetching.getWind()
    );
  }

  // componentDidMount() {
  //   SplashScreen.hide();
  // }

  render() {
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <ImageBackground
            source={require("./images/Compass.png")}
            style={styles.backgroundImage}
          > */}
            <ImageBackground
              source={require("./images/sideBar.jpg")}
              style={styles.backgroundImage2}
            >
              {/* <Geo/>
              <AirTempTest/>
              <Watertemp/> */}
                
              <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{
              }}
              >
                <Geo/>
                <AirTempTest/>
                <Watertemp/>
                <DispalyVis/>
                <WindDir/>
                <WindSpeed/>
                <WindGust/>
                <CurrentSpeed/>
                <CurrentDirection/>
                <SurfaceHeight/>
                <OceanTide/>
                <Text editable={false} selectTextOnFocus={false} placeholder="52ºA" style={styles.text1}> {airTemp}</Text >

                <TextInput editable={false} selectTextOnFocus={false} placeholder="48ºO" style={styles.text2} />

                <TextInput editable={false} selectTextOnFocus={false} placeholder="W/S" style={styles.text3} />

                <TextInput editable={false} selectTextOnFocus={false} placeholder="Current" style={styles.text4} />

                <TextInput editable={false} selectTextOnFocus={false} placeholder="other" style={styles.text5} />

                <TextInput editable={false} selectTextOnFocus={false} placeholder="other" style={styles.text6} />

                <TextInput editable={false} selectTextOnFocus={false} placeholder="other" style={styles.text7} />

                <TextInput editable={false} selectTextOnFocus={false} placeholder="other" style={styles.text8} />

              </ScrollView>
            </ImageBackground>
          {/* </ImageBackground> */}
      </View>
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  text1: {
    // marginTop: 30,
    marginBottom: 20,
    // marginRight: -100,

    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    flexWrap: "wrap"
  },
  text2: {
    marginBottom: 20,
    // marginRight: -100,

    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    flexWrap: "wrap"
  },
  text3: {
    marginBottom: 20,
    // marginRight: -100,

    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    flexWrap: "wrap"
  },
  text4: {
    marginBottom: 20,
    // marginRight: -100,

    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    flexWrap: "wrap"
  },
  text5: {
    marginBottom: 20,
    // marginRight: -100,

    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    flexWrap: "wrap"
  },
  text6: {
    marginBottom: 20,
    // marginRight: -100,

    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    flexWrap: "wrap"
  },
  text7: {
    marginBottom: 20,


    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    flexWrap: "wrap"
  },
  text8: {
    marginBottom: 20,


    height: 100,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16
    // flexWrap: 'wrap',
  },
  // backgroundImage: {

  //   height: 50,
  //   width: 50,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  backgroundImage2: {

    opacity: .7,
    marginRight: null,
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
  }
});