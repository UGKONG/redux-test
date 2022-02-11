/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const number = useSelector(state => state.number);
  const dispatch = useDispatch();
  const up = () => dispatch({ type: 'setNumber', payload: number + 1 });
  const down = () => dispatch({ type: 'setNumber', payload: number - 1 });
  return (
    <main>
      number: {number}<br />
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
      <br />
      Hello React!!
    </main>
  )
}

export default App;