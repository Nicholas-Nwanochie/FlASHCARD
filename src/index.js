import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { compose, createStore, applyMiddleware, combineReducers } from "redux"; // need applyMiddleware, compose
// import redux-thunk npm install
// import moduleName from ''
import './index.css';
import App from './App';
import Reducers from './reducers/index'
import Thunk from 'redux-thunk'

const middleware = [Thunk];

const store = createStore(Reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [thunk]

// applyMiddlware(middleware)

// initial = {}

 const initial  = {};

// createStore(<REDUCERS>, initial , <COMPOSE>)

createStore(
  Reducers,
  initial,
  composeEnhancers(applyMiddleware(...middleware))
);
// window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


