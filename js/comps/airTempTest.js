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

const AirTempTest = props => {
  var airTemp = findElement(props.airTemp[0], '"air_temperature (F)"');
  if (props.fetchingAT) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ºF</Text>
      <Text style={styles.text}>{airTemp}</Text>
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
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 32,
    color: "#0b0b0c",
    paddingLeft: 30
  }
});

const mapStateToProps = state => {
  return {
    airTemp: state.airTemp,
    fetchingAT: state.fetchingAT
  };
};

export default connect(mapStateToProps)(AirTempTest);
