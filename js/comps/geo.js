import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Geo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View
        style={{
          flexGrow: 0,
          alignItems: "center",
          justifyContent: "center",
          height: 75
        }}
      >
        <Text style={styles.bodyText}> Current Location: </Text>
        <Text style={styles.text}>Latitude: {this.state.latitude}</Text>
        <Text style={styles.text2}>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyText: {
    marginTop: 70,
    fontSize: 26,
    fontWeight: "bold"
  },
  text: {
    
    fontSize: 22,
    color: '#0b0b0c'
  },
  text2: {
    
    fontSize: 22,
    color: '#0b0b0c'
  }
});

module.exports = Geo;
