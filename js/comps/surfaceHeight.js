import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const SurfaceHeight= (props) => {
  var surfaceHeight = findElement(props.height[0], '"water_surface_height_above_reference_datum (m)"');
  if (props.fetching) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
   
      <Text style={styles.text}>{surfaceHeight}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  text: {
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 'auto',
    fontSize: 20
    
  },
  
})

const mapStateToProps = (state) => {
	return {
		height: state.height,
		fetching: state.fetching,
	}
}

export default connect(mapStateToProps)(SurfaceHeight)