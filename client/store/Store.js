import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer/RootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function appStore(initialState) {

    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

    return store;
}