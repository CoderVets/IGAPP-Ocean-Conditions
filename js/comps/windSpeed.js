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

const windSpeed = (props) => {
  var windSpd = findElement(props.wind[0], '"wind_speed (miles/hour)"');
  if (props.fetchingWind) {
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
    <Text style={styles.text}>{windSpd} MPH</Text>
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
		wind: state.wind,
		fetchingWind: state.fetchingWind,
	}
}

export default connect(mapStateToProps)(windSpeed)