import React from 'react';
import { connect } from 'react-redux'

const App = (props) => {
  const handleInc = () => {
    props.dispatch({type:'INC'})
  }
  const handleDec = () => {
    props.dispatch({type:'DEC'})
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
       <h4>{props.count}</h4> 
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
const  mapStateToProps = (state) => {
  return {
    count : state
  }
  }

export default connect(mapStateToProps)(App);
