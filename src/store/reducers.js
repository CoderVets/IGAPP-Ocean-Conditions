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

/* const getLyftETA = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case C.ETA:
      console.log('THIS IS THE REDUCER FIRING WE HAVE A REDUX STORE');
      //console.log(action)
      newState = {
        etaSeconds: action.payload[0].eta_seconds,
      };
      console.log('THIS IS THE NEW USER STATE');
      console.log(newState);
      return newState;
    default:
      return state;
  }
}; */

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

const fetching = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING:
      return true;
    case C.CANCEL_FETCHING:
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
  errors,
  fetching,
  //user,
  }
)