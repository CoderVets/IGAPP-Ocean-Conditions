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

const CurrentSpeed = props => {
  var currentSpeed = findElement(props.currents[0], '"sea_water_speed (cm/s)"');
  if (props.fetching) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentSpeed}</Text>
      <Text style={styles.text}>MPH</Text>
      <Text style={styles.fine}>Current</Text>
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
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 32,
    color: "#0b0b0c",
    paddingLeft: 30
  },
  fine: {
    fontWeight: "bold",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 14,
    color: "#0b0b0c",
    paddingLeft: 30
  }
});

const mapStateToProps = state => {
  return {
    currents: state.currents,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps)(CurrentSpeed);
