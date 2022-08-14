import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ACTIONS_TYPES } from "./types";

export const INCREMENT_ACTION = { type: ACTIONS_TYPES.INC }


export const DECREMENT_ACTION = { type: ACTIONS_TYPES.DEC }

// export const LOADER_ACTION = {
//     type: ACTIONS_TYPES.LOADING
// }

/*

export const INCREMENT_ACTION_ASYNC = () =>{
    // without thunk this is returned immediately with empty and you need to explictly provide dispatch if you need it
    setTimeout(()=>{
       return  { type: ACTIONS_TYPES.INC }
    },8000)
}

export const DECREMENT_ACTION_ASYNC = () =>{
   // without thunk this is returned immediately with empty and you need to explictly provide dispatch if you need it 
    setTimeout(()=>{
     return { type: ACTIONS_TYPES.DEC }
    },8000)
}
*/

export const INCREMENT_ACTION_ASYNC = () => {
    // dispatch(INCREMENT_ACTION_ASYNC()) // returns a function which will be called by thunk
    return dispatch => {
        dispatch({ type: ACTIONS_TYPES.LOADING })
        setTimeout(() => {
            dispatch({ type: ACTIONS_TYPES.INC })
        }, 8000)
    }

}

export const DECREMENT_ACTION_ASYNC = () => {
    return dispatch => {
        dispatch({ type: ACTIONS_TYPES.LOADING })
        setTimeout(() => {
            dispatch({ type: ACTIONS_TYPES.DEC })
        }, 8000)
    }
}
const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const INCREMENT_ACTION_ASYNC_SAGA = function* (){
        yield put({ type: ACTIONS_TYPES.LOADING });
        yield call(delay, 8000);
        yield put({ type: ACTIONS_TYPES.INC })
       
}

export const DECREMENT_ACTION_ASYNC_SAGA = function* (){
    yield put({ type: ACTIONS_TYPES.LOADING });
    yield call(delay, 8000);
    yield put({ type: ACTIONS_TYPES.DEC })
   
}

export const watcherSaga = function* watcherSaga() {
    yield takeEvery("INC", INCREMENT_ACTION_ASYNC_SAGA);
    yield takeEvery("DEC", DECREMENT_ACTION_ASYNC_SAGA);
}
