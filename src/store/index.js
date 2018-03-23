import C from '../constants'
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import csvjson from 'csvjson'
import urlMaker from '../../js/urlMaker'

const logger = store => next => action => {
  let result
  console.group(action.type)
  console.info('dispatching', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const waitLocation = store => next => action => {
  if (action.type === C.CANCEL_FETCHING_LOC){

    store.dispatch({
      type: C.FETCHING_AT
    })
    console.log('*****store****** ', store.getState().getLocR , ' ******')
    var getLocS = store.getState().getLocR
    var url = urlMaker(0, getLocS)
    console.log(url)
    fetch(url,{
      method: 'get',
    })
    .then((response) => response.text())
    .then((respText) => {
      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };
      var data = csvjson.toObject(respText, options);
      console.log('getAirTemp')
      store.dispatch({
        type: C.GET_AIR_TEMP,
        payload: data
      })
      store.dispatch({
        type: C.CANCEL_FETCHING_AT
      })
    })

    store.dispatch({
      type: C.FETCHING_CUR
    })
    var url = urlMaker(3, getLocS)
    console.log(url)
    fetch(url,{
      method: 'get',
    })
    .then((response) => response.text())
    .then((respText) => {
      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };
      var cur = csvjson.toObject(respText, options);
      store.dispatch({
        type: C.GET_CURRENTS,
        payload: cur
      })
      store.dispatch({
        type: C.CANCEL_FETCHING_CUR
      })
    })
    .catch(error => {
      store.dispatch(
        addError(error.message)
      )
      store.dispatch({
        type: C.CANCEL_FETCHING_CUR
      })
    })

    store.dispatch({
      type: C.FETCHING_WS_ABOVE_DATUM
    })
    var url = urlMaker(5, getLocS)
    console.log(url)
    fetch(url,{
      method: 'get',
    })
    .then((response) => response.text())
    .then((respText) => {
      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };
      var cur = csvjson.toObject(respText, options);
      store.dispatch({
        type: C.GET_WS_ABOVE_DATUM,
        payload: cur
      })
      store.dispatch({
        type: C.CANCEL_FETCHING_WS_ABOVE_DATUM
      })
    })
    .catch(error => {
      store.dispatch(
        addError(error.message)
      )
      store.dispatch({
        type: C.CANCEL_FETCHING_WS_ABOVE_DATUM
      })
    })

    store.dispatch({
      type: C.FETCHING_OCEAN_TIDE
    })
    var url = urlMaker(6, getLocS)
    console.log(url)
    fetch(url,{
      method: 'get',
    })
    .then((response) => response.text())
    .then((respText) => {
      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };
      var cur = csvjson.toObject(respText, options);
      store.dispatch({
        type: C.GET_OCEAN_TIDE,
        payload: cur
      })
      store.dispatch({
        type: C.CANCEL_FETCHING_OCEAN_TIDE
      })
    })
    .catch(error => {
      store.dispatch(
        addError(error.message)
      )
      store.dispatch({
        type: C.CANCEL_FETCHING_OCEAN_TIDE
      })
    })

    store.dispatch({
      type: C.FETCHING_WATER_TEMP
    })
    var url = urlMaker(7, getLocS)
    console.log(url)
    fetch(url,{
      method: 'get',
    })
    .then((response) => response.text())
    .then((respText) => {
      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };
      var cur = csvjson.toObject(respText, options);
      store.dispatch({
        type: C.GET_WATER_TEMP,
        payload: cur
      })
      store.dispatch({
        type: C.CANCEL_FETCHING_WATER_TEMP
      })
    })
    .catch(error => {
      store.dispatch(
        addError(error.message)
      )
      store.dispatch({
        type: C.CANCEL_FETCHING_WATER_TEMP
      })
    })

    store.dispatch({
      type: C.FETCHING_WIND
    })
    var url = urlMaker(8, getLocS)
    console.log(url)
    fetch(url,{
      method: 'get',
    })
    .then((response) => response.text())
    .then((respText) => {
      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };
      var cur = csvjson.toObject(respText, options);
      store.dispatch({
        type: C.GET_WIND,
        payload: cur
      })
      store.dispatch({
        type: C.CANCEL_FETCHING_WIND
      })
    })
    .catch(error => {
      store.dispatch(
        addError(error.message)
      )
      store.dispatch({
        type: C.CANCEL_FETCHING_WIND
      })
    })

    store.dispatch({
      type: C.FETCHING_VIS
    })
    var url = urlMaker(13, getLocS)
    console.log(url)
    fetch(url,{
      method: 'get',
    })
    .then((response) => response.text())
    .then((respText) => {
      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };
      var cur = csvjson.toObject(respText, options);
      store.dispatch({
        type: C.GET_VIS,
        payload: cur
      })
      store.dispatch({
        type: C.CANCEL_FETCHING_VIS
      })
    })
    .catch(error => {
      store.dispatch(
        addError(error.message)
      )
      store.dispatch({
        type: C.CANCEL_FETCHING_VIS
      })
    })

    next(action)

  } else {
    next(action)
  }

}

export default (initialState={}) => {
	return applyMiddleware(thunk,logger,waitLocation)(createStore)(rootReducer, initialState)
}