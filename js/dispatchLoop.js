import storeFactory from '../src/store';
import C from '../src/constants'
import * as fetching from "../src/actions"

const store = storeFactory()

export default dispatchLoop = () => {
  
  store.dispatch(fetching.getAirTemp());
   
}