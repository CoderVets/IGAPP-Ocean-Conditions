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

const CurrentDirection = (props) => {
  var currentDirection = findElement(props.currents[0], '"direction_of_sea_water_velocity (degree)"');
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
      <Text style={styles.text}>{currentDirection}º</Text>
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
    justifyContent: "flex-end",
    alignItems: "center",
    // marginBottom: 15,
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
		currents: state.currents,
		fetching: state.fetching,
	}
}

export default connect(mapStateToProps)(CurrentDirection)