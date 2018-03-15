import C from '../constants'
import { combineReducers } from 'redux'

/* export const userLocation = (state = {}, action) => {
    (action.type === GET_LOC) ?
      action.payload :
        state,
}; */

/* const getEtaAccToken = (state = null, action) =>
  (action.type === C.ETA_ACC_TOKEN) ?
    action.payload :
    state; */

const airTemp = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_AIR_TEMP:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const currents = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_CURRENTS:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const height = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_WS_ABOVE_DATUM:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const errors = (state=[], action) => {
  switch(action.type) {
    case C.ADD_ERROR :
      return [
        ...state,
        action.payload
      ]
    case C.CLEAR_ERROR :
      return state.filter((message, i) => i !== action.payload)
    default :
      return state
  }
};

const fetchingAT = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_AT:
      return true;
    case C.CANCEL_FETCHING_AT:
      return false;
    default:
      return state;
  }
};

const fetchingCur = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_CUR:
      return true;
    case C.CANCEL_FETCHING_CUR:
      return false;
    default:
      return state;
  }
};

const fetchingHeight = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_WS_ABOVE_DATUM:
      return true;
    case C.CANCEL_FETCHING_WS_ABOVE_DATUM:
      return false;
    default:
      return state;
  }
};

const tide = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_OCEAN_TIDE:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const waterTemp = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_WATER_TEMP:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const wind = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_WIND:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const visibility = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_VIS:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const fetchingTide = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_OCEAN_TIDE:
      return true;
    case C.CANCEL_FETCHING_OCEAN_TIDE:
      return false;
    default:
      return state;
  }
};

const fetchingWT = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_WATER_TEMP:
      return true;
    case C.CANCEL_FETCHING_WATER_TEMP:
      return false;
    default:
      return state;
  }
};

const fetchingWind = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_WIND:
      return true;
    case C.CANCEL_FETCHING_WIND:
      return false;
    default:
      return state;
  }
};

const fetchingVis = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_VIS:
      return true;
    case C.CANCEL_FETCHING_VIS:
      return false;
    default:
      return state;
  }
};

/* const user = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_USER:
      newState = action.user;
      return newState;
    case C.RECIEVE_USER:
      console.log('THIS IS THE REDUCER FIRING WE HAVE A REDUX STORE');
      newState = {
        access_token: action.user.data.access_token,
        expires_in: action.user.data.refresh_token,
        refresh_token: action.user.data.token_type,
        token_type: action.user.data.expires_in,
        scope: action.user.data.scope,
      };
      console.log('THIS IS THE NEW USER STATE');
      console.log(newState);
      return newState;
    default:
      return state;
  }
}; */

export default combineReducers({
  //getEtaAccToken,
  //getLyftETA,
  airTemp,
  currents,
  height,
  errors,
  fetchingAT,
  fetchingCur,
  fetchingHeight,
  tide,
  waterTemp,
  wind,
  visibility,
  fetchingTide,
  fetchingWT,
  fetchingWind,
  fetchingVis,
  //user,
  }
)