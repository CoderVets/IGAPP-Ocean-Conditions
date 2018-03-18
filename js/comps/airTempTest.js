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
  var airTemp = findElement(props.airTemp[0], '"air_temperature (F)"');
  if (props.fetchingAT) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Air Temp = {airTemp}ºF</Text>
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
		airTemp: state.airTemp,
		fetchingAT: state.fetchingAT,
	}
}

export default connect(mapStateToProps)(AirTempTest)