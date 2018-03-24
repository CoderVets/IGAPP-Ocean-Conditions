import C from './constants'
import csvjson from 'csvjson'
import urlMaker from '../js/urlMaker'
import storeFactory from "./store";

const store = storeFactory();

export const addError = (message) => ({
  type: C.ADD_ERROR,
  payload: message,
})

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index
})

export const getAirTemp = () => dispatch => {

  dispatch({
    type: C.FETCHING_AT
  })

  var url = urlMaker(0)
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
    dispatch({
      type: C.GET_AIR_TEMP,
      payload: data
    })
    dispatch({
      type: C.CANCEL_FETCHING_AT
    })
  })

  .catch(error => {
    dispatch(
      addError(error.message)
    )

    dispatch({
      type: C.CANCEL_FETCHING_AT
    })
  })
}

export const getCur = () => dispatch => {

  dispatch({
    type: C.FETCHING_CUR
  })

  var url = urlMaker(3)
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
    
    dispatch({
      type: C.GET_CURRENTS,
      payload: cur
    })
    dispatch({
      type: C.CANCEL_FETCHING_CUR
    })
  })

  .catch(error => {
    dispatch(
      addError(error.message)
    )

    dispatch({
      type: C.CANCEL_FETCHING_CUR
    })
  })
}

export const getHeight = () => dispatch => {

  dispatch({
    type: C.FETCHING_WS_ABOVE_DATUM
  })

  var url = urlMaker(5)
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
    
    dispatch({
      type: C.GET_WS_ABOVE_DATUM,
      payload: cur
    })
    dispatch({
      type: C.CANCEL_FETCHING_WS_ABOVE_DATUM
    })
  })

  .catch(error => {
    dispatch(
      addError(error.message)
    )

    dispatch({
      type: C.CANCEL_FETCHING_WS_ABOVE_DATUM
    })
  })
}

export const getTide = () => dispatch => {

  dispatch({
    type: C.FETCHING_OCEAN_TIDE
  })

  var url = urlMaker(6)
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
    
    dispatch({
      type: C.GET_OCEAN_TIDE,
      payload: cur
    })
    dispatch({
      type: C.CANCEL_FETCHING_OCEAN_TIDE
    })
  })

  .catch(error => {
    dispatch(
      addError(error.message)
    )

    dispatch({
      type: C.CANCEL_FETCHING_OCEAN_TIDE
    })
  })
}

export const getWaterTemp = () => dispatch => {

  dispatch({
    type: C.FETCHING_WATER_TEMP
  })

  var url = urlMaker(7)
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
    
    dispatch({
      type: C.GET_WATER_TEMP,
      payload: cur
    })
    dispatch({
      type: C.CANCEL_FETCHING_WATER_TEMP
    })
  })

  .catch(error => {
    dispatch(
      addError(error.message)
    )

    dispatch({
      type: C.CANCEL_FETCHING_WATER_TEMP
    })
  })
}

export const getWind = () => dispatch => {

  dispatch({
    type: C.FETCHING_WIND
  })

  var url = urlMaker(8)
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
    
    dispatch({
      type: C.GET_WIND,
      payload: cur
    })
    dispatch({
      type: C.CANCEL_FETCHING_WIND
    })
  })

  .catch(error => {
    dispatch(
      addError(error.message)
    )

    dispatch({
      type: C.CANCEL_FETCHING_WIND
    })
  })
}

export const getVis = () => dispatch => {

  dispatch({
    type: C.FETCHING_VIS
  })

  var url = urlMaker(13)
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
    
    dispatch({
      type: C.GET_VIS,
      payload: cur
    })
    dispatch({
      type: C.CANCEL_FETCHING_VIS
    })
  })

  .catch(error => {
    dispatch(
      addError(error.message)
    )

    dispatch({
      type: C.CANCEL_FETCHING_VIS
    })
  })
}

export const getLoc = (userLoc) => dispatch => {
  //const propmise = store.dispatch(getPosition());
  dispatch({
    type: C.GET_GEO,
    payload: userLoc,
  })
}

export const isFetchingLoc = () => dispatch => {
  dispatch ({
    type: C.FETCHING_LOC,
  })
}

export const notFetchingLoc = () => dispatch => {
  dispatch ({
    type: C.CANCEL_FETCHING_LOC,
  })
}
