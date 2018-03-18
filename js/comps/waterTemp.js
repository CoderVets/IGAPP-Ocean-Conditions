import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import findElement from "../findElement";


const watertemp = (props) => {
  var waterTemp = findElement(props.waterTemp[0], '"sea_water_temperature (F)"');

  if (props.fetchingWT) {

    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("./images/textBackground.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.text}>{waterTemp}ºF</Text>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  text: {
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 15,
    // marginRight: 15,
    fontSize: 20
  },
  backgroundImage: {
    flex: 1,

    width: null,
    height: null,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    waterTemp: state.waterTemp,
    fetching: state.fetching
  };
};



const mapStateToProps = (state) => {
	return {
		waterTemp: state.waterTemp,
		fetchingWT: state.fetchingWT,
	}
}

export default connect(mapStateToProps)(watertemp)
