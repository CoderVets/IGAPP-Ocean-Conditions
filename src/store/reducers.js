import C from '../constants'
import { combineReducers } from 'redux'

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

const getLocR = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.GET_GEO:
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

const fetchingLoc = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_LOC:
      return true;
    case C.CANCEL_FETCHING_LOC:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
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
  getLocR,
  fetchingLoc,
  }
)