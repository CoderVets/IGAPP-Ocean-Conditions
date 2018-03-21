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

const windGust = (props) => {
  var windGst = findElement(props.wind[0], '"wind_speed_of_gust (miles/hour)"');
  if (props.fetchingWind) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }


return (
  <View style={styles.container}>
  
    <Text style={styles.text}> {windGst}MPH</Text>
    
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
		wind: state.wind,
		fetchingWind: state.fetchingWind,
	}
}

export default connect(mapStateToProps)(windGust)