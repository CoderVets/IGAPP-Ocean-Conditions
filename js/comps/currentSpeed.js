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

const CurrentSpeed = (props) => {
  var currentSpeed = findElement(props.currents[0], '"sea_water_speed (cm/s)"');
  if (props.fetching) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>{currentSpeed}MPH</Text>
      
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
  
})


const mapStateToProps = (state) => {
	return {
		currents: state.currents,
		fetching: state.fetching,
	}
}

export default connect(mapStateToProps)(CurrentSpeed)