import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const AirTempTest = (props) => {
  var airTemp = findElement(props.waterTemp[0], '"sea_water_temperature (F)"');
  if (props.fetching) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Water Temp = {airTemp}ºF</Text>
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
		waterTemp: state.waterTemp,
		fetching: state.fetching,
	}
}

export default connect(mapStateToProps)(AirTempTest)