/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


import { createStore } from 'redux';

import { Provider } from 'react-redux';

import { btnListReduce, appState } from './Redux/Reduce+Action+State';


//Store

const store = createStore(btnListReduce, appState);


const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
