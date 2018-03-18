import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView
} from "react-native";

import storeFactory from "../../src/store";
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
import CurrentSpeed from './currentSpeed'
import CurrentDirection from './currentDirection'
import SurfaceHeight from './surfaceHeight'
import OceanTide from './oceanTide'

//import SplashScreen from 'react-native-splash-screen'

const store = storeFactory();
var storeprops = { airTemp };
console.log("Store props = " + storeprops);

export default class mainPage extends Component {
  componentWillMount() {
    store.dispatch(fetching.getAirTemp());
    store.dispatch(fetching.getCur());
    store.dispatch(fetching.getHeight());
    store.dispatch(fetching.getTide());
    store.dispatch(fetching.getVis());
    store.dispatch(fetching.getWaterTemp());
    store.dispatch(fetching.getWind());
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
            source={require("./images/background.jpeg")}
            style={styles.backgroundImage2}
          >
            <Geo />

            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 20, flex: 1, }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 100,
                  marginLeft: 20,
                  fontSize: 24
                }}

                Air Temperature
              </Text>
              <AirTempTest />
              <Text
                style={{
                  
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 40,
                  
                  fontSize: 24
                }}
              >
                Water Temperature
              </Text>
              <Watertemp />
            </ScrollView>
          </ImageBackground>
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
  backgroundImage2: {
    flex: 1,

    width: null,
    height: null,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center"
  }
});
