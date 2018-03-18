import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const windDirection = (props) => {
  var windDir = findElement(props.wind[0], '"wind_from_direction (degree)"');
  if (props.fetchingWind) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Wind Direction = {windDir} Deg.</Text>
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

export default connect(mapStateToProps)(windDirection)