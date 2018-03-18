import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const OceanTide = (props) => {
  var oceanTide = findElement(props.tide[0], '"sea_surface_height_amplitude_due_to_equilibrium_ocean_tide (feet)"');
  if (props.fetching) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Ocean Tide = {oceanTide}</Text>
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
		tide: state.tide,
		fetching: state.fetching,
	}
}

export default connect(mapStateToProps)(OceanTide)