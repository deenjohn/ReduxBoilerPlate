import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux'
import { createStore } from "redux";
import App from './components/App';
import { counterReducer } from "./reducers"


const store = createStore(counterReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));


