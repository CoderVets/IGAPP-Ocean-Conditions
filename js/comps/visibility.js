import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const displayVis = (props) => {
  var vis = findElement(props.visibility[0], '"visibility (nautical miles)"');
  if (props.fetchingVis) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Visibility = {vis} Nautical Miles</Text>
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
		visibility: state.visibility,
		fetchingVis: state.fetchingVis,
	}
}

export default connect(mapStateToProps)(displayVis)