import storeFactory from '../src/store';
import C from '../src/constants'
// import {
//   addError,
//   clearError,
//   isFetching,
//   notFetching,
//   getAirTemp,
//   getCur,
// } from '../src/actions'

const store = storeFactory()

export default dispatchLoop = () => {
  for (i =0; i<3; i++) {
    store.dispatch(
      C.GET_ARRAY[i]
    );
  }
}