import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from "./container/App";
import createStore from './store/Store'

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);