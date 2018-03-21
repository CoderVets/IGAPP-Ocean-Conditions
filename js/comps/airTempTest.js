import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
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
   
      <Text style={styles.text}>{airTemp}ºF</Text>
      
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
		airTemp: state.airTemp,
		fetchingAT: state.fetchingAT,
	}
}

export default connect(mapStateToProps)(AirTempTest)