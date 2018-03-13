import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
// import RNFS from "react-native-fs"

const AirTempTest = (props) => {
  /*console.log("hello")
  if (props.fetching) {
    return(
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  //console.log(props.airTemp)
  return (
    <View style={styles.container}>
      <Text>Fetching = {props.airTemp.Length}</Text>
    </View>
  )*/
  //props.fetching = false;
  console.log("yo!!")
  var test = props.airTemp;

  //console.log(test[0]["sensor_id"]);

  //console.log(typeof test[0]);

  //var test2 = test.substring(test.lastIndexOf('(F)":"')+1,test.lastIndexOf('"quality_flags'));

  //console.log(test2)
  
  /*var test = JSON.stringify(props.airTemp["0"])
  var path = RNFS.DocumentDirectoryPath + "/stuff.json";
  RNFS.writeFile(path, test, "utf8")
    .then(success => {
      console.log("file written")
      console.log(path)
    })
    .catch(err => {
      console.log(err.message)
    })*/
  //console.log(props.fetching)
  return (
    <View style={styles.container}>
      <Text>Fetching = {props.airTemp.length}</Text>
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
  //console.log(state)
  console.log("hello2")
	return {
		airTemp: state.airTemp,
		fetching: state.fetching,
		//AirTemp: state.airTemp["0"][""air_temperature (F)""]
		//powder: state.allSkiDays.filter(day => day.powder).length,
		//backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}

}

export default connect(mapStateToProps)(AirTempTest)