import React from 'react';
import { connect } from 'react-redux'

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
      dispatch({ type: 'LOADING' })
      setTimeout(()=>{
        dispatch({ type: 'INC' })
      },8000)
    },
    dec: () => {
      dispatch({ type: 'LOADING' })
      setTimeout(()=>{
        dispatch({ type: 'DEC' })
      },8000)
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
