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

import * as fetching from "../../src/actions";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import Geo from "./geo";

import AirTempTest, { airTemp } from "./airTempTest";
import Watertemp from "./waterTemp";
import CurrentSpeed from "./currentSpeed";
import CurrentDirection from "./currentDirection";
import SurfaceHeight from "./surfaceHeight";
import OceanTide from "./oceanTide";
import DispalyVis from "./visibility";
import WindDir from "./windDirection";
import WindSpeed from "./windSpeed";
import WindGust from "./windGust";

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
          <ImageBackground
            source={require("./images/background.jpeg")}
            style={styles.backgroundImage2}
          >
            <Geo />

            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{
                flexGrow: 1,
                marginLeft: "50%",
                marginTop: 40,
                marginBottom: 40,
                width: "100%"
              }}
            >
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/airTemp.png")}
                  style={styles.backgroundImage}
                />

                <AirTempTest />
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/waterTemp.png")}
                  style={styles.backgroundImage}
                />

                <Watertemp />
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/currentSpeed.png")}
                  style={styles.backgroundImage}
                />
                <CurrentSpeed />
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/currentDir.png")}
                  style={styles.backgroundImage}
                />
                <CurrentDirection />
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/windDir.png")}
                  style={styles.backgroundImage}
                />
                <WindDir />
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/windSpeed.png")}
                  style={styles.backgroundImage}
                />
                <WindSpeed />
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/windGust.png")}
                  style={styles.backgroundImage}
                />
                <WindGust />
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 40 }}>
                <Image
                  source={require("./images/vis.png")}
                  style={styles.backgroundImage}
                />
                <DispalyVis />
              </View>
              {/* <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("./images/surfaceHeight.png")}
                  style={styles.backgroundImage}
                />
                <SurfaceHeight />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("./images/oceanTide.png")}
                  style={styles.backgroundImage}
                />
                <OceanTide />
              </View> */}
            </ScrollView>
          </ImageBackground>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage2: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    marginTop: 30,
    width: 100,
    height: 100,
    opacity: 0.8,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center"
  }
});
