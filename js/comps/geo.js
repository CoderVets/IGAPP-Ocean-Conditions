import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Geo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 2222,
      longitude: 666,
      error: null
    };console.log('goe****work damn it****' + this.state.latitude)
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
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyText: {
    marginTop: 70,
    fontSize: 20,
    fontWeight: "bold"
  }
});

module.exports = Geo;
