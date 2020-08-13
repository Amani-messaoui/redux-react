import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware  } from "redux";
import { Provider} from 'react-redux';
import allReducers from './reducers';
import App from './App';
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
 }
 
   
const store = createStore(allReducers, applyMiddleware(logger));

  

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById("root"));

serviceWorker.unregister();
