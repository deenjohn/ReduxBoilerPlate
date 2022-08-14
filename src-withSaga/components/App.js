import React from 'react';
import { connect } from 'react-redux'
import { put } from 'redux-saga/effects'
import { DECREMENT_ACTION_ASYNC  , INCREMENT_ACTION_ASYNC , watcherSaga } from "../actions"

const App = ({ inc, dec, isLoading, count }) => {
  const handleInc = () => {
    inc();
  }
  const handleDec = () => {
    dec();
  }
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      position: 'relative',
      left: '20px',
      top: '20px'
    }}>
      {isLoading ? <h4>{'loading....'}</h4> : <h4>{count}</h4>}
      <div style={{
        display: 'flex',
        gap: '16px',

      }}>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  )
};
const mapStateToProps = ({counter}) => {

  return {
    count: counter.count,
    isLoading: counter.isLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inc: () => {
      // dispatch(LOADER_ACTION)
      // setTimeout(()=>{
      //   dispatch(INCREMENT_ACTION)
      // },8000)
      //dispatch(INCREMENT_ACTION_ASYNC()) // using thunk , yiu can dispatch function
      dispatch({type: 'INC'})
    },
    dec: () => {
      // dispatch(LOADER_ACTION)
      // setTimeout(()=>{
      //   dispatch(DECREMENT_ACTION)
      // },8000)
      //dispatch(DECREMENT_ACTION_ASYNC()) // using thunk 
      dispatch({type: 'DEC'})
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
