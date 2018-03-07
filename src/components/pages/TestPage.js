import C from '../../constants'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Button,
} from 'react-native'

import storeFactory from '../../store';
import { addError,
  clearError,
  isFetching,
  notFetching,
} from '../../actions'


const store = storeFactory()

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    store.dispatch(
      addError('have an error')
    )
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Button
          onPress = {store.dispatch({
            type: C.FETCHING
            })
          }
          title = 'fetching'
        />
        <Button
          onPress = {store.dispatch({
            type: C.CANCEL_FETCHING
            })
          }
          title = 'cancle fetching'
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default TestPage