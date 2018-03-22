import storeFactory from '../src/store';
import C from '../src/constants'
import * as fetching from "../src/actions"
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
  // for (i =0; i<3; i++) {
  //   store.dispatch(
  //     C.GET_ARRAY[i]
  //   );
  // }
  //if (geoFetching === false) {
    //store.dispatch(fetching.getLoc());
    store.dispatch(fetching.getAirTemp());
    store.dispatch(fetching.getCur());
    store.dispatch(fetching.getHeight());
    store.dispatch(fetching.getTide());
    store.dispatch(fetching.getVis());
    store.dispatch(fetching.getWaterTemp());
    store.dispatch(fetching.getWind());
  //}
}