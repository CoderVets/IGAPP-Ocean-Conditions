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

     
    <Text style={styles.text}>{vis} NM</Text>
    
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
  justifyContent: 'center',
  alignItems: 'center',
  // marginBottom: 15,
  fontSize: 20
  
},

})

const mapStateToProps = (state) => {
	return {
		visibility: state.visibility,
		fetchingVis: state.fetchingVis,
	}
}

export default connect(mapStateToProps)(displayVis)