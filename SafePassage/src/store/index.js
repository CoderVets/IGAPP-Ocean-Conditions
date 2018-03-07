import C from '../constants'
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//import { combineReducers } from 'redux';
//import reducers from './reducers';

/* export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
  );
} */

const logger = store => next => action => {
  let result
  console.group(action.type)
  console.info('dispatching', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

/* let creatStoreWithMiddleware = applyMiddleware(logger)(createStore)

let yourApp = rootReducer
let store = creatStoreWithMiddleware(yourApp) */

export default (initialState={}) => {
	return applyMiddleware(thunk,logger)(createStore)(rootReducer, initialState)
}