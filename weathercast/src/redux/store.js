import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import forecastReducer from './reducers/forecastReducer';

const storeRedux = () => createStore(
    forecastReducer,
    applyMiddleware(thunk)
);

export default storeRedux;