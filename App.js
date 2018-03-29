import React from 'react';
import { Provider } from 'react-redux';
import storeFactory from './src/store';
import RootNavigation from './src/components/navigation/RootNavigation';

const store = storeFactory();

console.log('####### CURENT STORE #######');
console.log(store);
console.log('####### CURENT STORE #######');

const App = () => (
    <Provider store={store}>
        <RootNavigation />
    </Provider>

);

export default App;