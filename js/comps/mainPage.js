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
import {
  addError,
  clearError,
  isFetching,
  notFetching,
  getAirTemp
} from '../../src/actions';
import SplashScreen from 'react-native-splash-screen'

const store = storeFactory();

export default class mainPage extends Component {

  componentWillMount() {
    store.dispatch(
      getAirTemp()
    );
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      
      <View style={styles.container}>
        {/* <ImageBackground
          source={require("./images/Compass.png")}
          style={styles.backgroundImage}
        > */}
        <ImageBackground
          source={require("./images/sideBar.jpg")}
          style={styles.backgroundImage2}
        >
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
         }}
      >
          <TextInput editable={false} selectTextOnFocus={false} placeholder="52ºA" style={styles.text1} />

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
