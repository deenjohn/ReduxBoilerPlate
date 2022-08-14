import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware , combineReducers } from "redux";
import { watcherSaga } from "../src/actions";
//import thunk from 'redux-thunk';
import App from './components/App';
import { counterReducer  } from "./reducers"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    counter :counterReducer, // state as counter : { isLoading : , count: }
  });

const midllewares = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer,midllewares);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
sagaMiddleware.run(watcherSaga)

