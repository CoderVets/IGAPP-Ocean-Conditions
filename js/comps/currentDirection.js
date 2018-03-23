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

const CurrentDirection = props => {
  var currentDirection = findElement(
    props.currents[0],
    '"direction_of_sea_water_velocity (degree)"'
  );
  if (props.fetching) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentDirection}º</Text>
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

export default connect(mapStateToProps)(CurrentDirection);
