import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const windGust = (props) => {
  var windGst = findElement(props.wind[0], '"wind_speed_of_gust (miles/hour)"');
  if (props.fetchingWind) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Wind Speed = {windGst} MPH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7098d8"
  },
})

const mapStateToProps = (state) => {
	return {
		wind: state.wind,
		fetchingWind: state.fetchingWind,
	}
}

export default connect(mapStateToProps)(windGust)