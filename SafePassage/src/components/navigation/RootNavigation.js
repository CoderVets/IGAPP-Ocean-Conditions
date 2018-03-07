import React, { Component } from 'react';
// this gives us access to components created in React
import {
  StackNavigator,
} from 'react-navigation';
// this allows us to  use Reacts built in navigation interface

import TestPage from '../pages/TestPage'
// brings the profile page into the main file

const RootNavigation=StackNavigator({
  
  Home: {screen: TestPage},
  // declare our screens
  
})

export default RootNavigation