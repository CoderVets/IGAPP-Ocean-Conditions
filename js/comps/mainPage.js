import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput
} from "react-native";
import storeFactory from '../../src/store';
import {
  addError,
  clearError,
  isFetching,
  notFetching,
  getAirTemp,
} from '../../src/actions'

const store = storeFactory()

export default class mainPage extends Component {

  //this is to test that the store is working
  componentWillMount() {
    store.dispatch(
      getAirTemp()
    );
  }

  render() {
    return (
      <View style={styles.container}>
      
        <ImageBackground
          source={require("./images/Compass.png")}
          style={styles.backgroundImage}
        >
        <ImageBackground
          source={require("./images/sideBar.jpg")}
          style={styles.backgroundImage2}>

          <TextInput placeholder = '52ºA' style={styles.text1}/> 

          <TextInput placeholder = '48ºO' style={styles.text2}/> 

          <TextInput placeholder = 'W/S' style={styles.text3}/>  

          <TextInput placeholder = 'Current' style={styles.text4}/> 

          <TextInput placeholder = 'other' style={styles.text5}/>  

          <TextInput placeholder = 'other' style={styles.text6}/>

          <TextInput placeholder = 'other' style={styles.text7}/>

          <TextInput placeholder = 'other' style={styles.text8}/>

          </ImageBackground>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7098d8"
  },
  text1: {
    
    marginTop: 30,
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
     borderColor: 'black', 
     borderWidth: 1,
     borderRadius: 50,
      textAlign:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 16,
      flexWrap: 'wrap',
  },
  text2: {
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
   borderColor: 'black', 
   borderWidth: 1,
   borderRadius: 50,
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  text3: {
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
   borderColor: 'black', 
   borderWidth: 1,
   borderRadius: 30,
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  text4: {
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
   borderColor: 'black', 
   borderWidth: 1,
   borderRadius: 50,
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  text5: {
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
   borderColor: 'black', 
   borderWidth: 1,
   borderRadius: 50,
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    flexWrap: 'wrap',

  },
  text6: {
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
   borderColor: 'black', 
   borderWidth: 1,
   borderRadius: 50,
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    flexWrap: 'wrap',

  },
  text7: {
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
   borderColor: 'black', 
   borderWidth: 1,
   borderRadius: 50,
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    flexWrap: 'wrap',

  },
  text8: {
    marginBottom: 20,
    marginRight: -5,
    height: 60,
    width: 60, 
   borderColor: 'black', 
   borderWidth: 1,
   borderRadius: 50,
    textAlign:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    flexWrap: 'wrap',

  },
  backgroundImage: {
   
    
    height: 175,
    width: 175,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage2: {
    
    opacity: .7,
    marginRight: 300,
    height: 700,
    width: 80,
    alignItems: "center",
    justifyContent: "center"
  }
});
