import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware , combineReducers } from "redux";
import thunk from 'redux-thunk';
import App from './components/App';
import { counterReducer  } from "./reducers"


const rootReducer = combineReducers({
    counter :counterReducer, // state as counter : { isLoading : , count: }
  });

const thunkify = applyMiddleware(thunk);
const store = createStore(rootReducer,thunkify);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));


