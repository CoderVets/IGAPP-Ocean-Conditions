import React, { Component } from 'react';
// this gives us access to components created in React
import {
  StackNavigator,
} from 'react-navigation';
// this allows us to  use Reacts built in navigation interface

import MainPage from '../../../js/comps/mainPage'
// brings the profile page into the main file

const RootNavigation=StackNavigator({
  
  Home: {
    screen: MainPage,
    navigationOptions: {
    title: null,
    header: null,
    }},
  
  // declare our screens
  
})

export default RootNavigation