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

const windGust = props => {
  var windGst = findElement(props.wind[0], '"wind_speed_of_gust (miles/hour)"');
  if (props.fetchingWind) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {windGst}</Text>
      <Text style={styles.text}>MPH</Text>
      <Text style={styles.fine}>Gust</Text>
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
    wind: state.wind,
    fetchingWind: state.fetchingWind
  };
};

export default connect(mapStateToProps)(windGust);
