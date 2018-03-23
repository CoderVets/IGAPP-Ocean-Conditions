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

const watertemp = props => {
  var waterTemp = findElement(
    props.waterTemp[0],
    '"sea_water_temperature (F)"'
  );

  if (props.fetchingWT) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ºF</Text>
      <Text style={styles.text}>{waterTemp}</Text>
      <Text style={styles.fine}>Water</Text>
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
    waterTemp: state.waterTemp,
    fetchingWT: state.fetchingWT
  };
};

export default connect(mapStateToProps)(watertemp);
