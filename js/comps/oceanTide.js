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
    
      <Text style={styles.text}>{oceanTide}</Text>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    
    // marginBottom: 15,
    fontSize: 20
    
  },
  
})

const mapStateToProps = (state) => {
	return {
		tide: state.tide,
		fetching: state.fetchingTide,
	}
}

export default connect(mapStateToProps)(OceanTide)