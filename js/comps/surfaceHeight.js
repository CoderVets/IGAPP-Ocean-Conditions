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
    <ImageBackground
            source={require("./images/textBackground.jpg")}
            style={styles.backgroundImage}
          >
      <Text style={styles.text}>{surfaceHeight}</Text>
      </ImageBackground>
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
    // marginRight: 15,
    fontSize: 20
    
  },
  backgroundImage: {
    flex: 1,

    width: null,
    height: null,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center"
  },
})

const mapStateToProps = (state) => {
	return {
		height: state.height,
		fetching: state.fetching,
	}
}

export default connect(mapStateToProps)(SurfaceHeight)