import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const Increment = () => {
    const { setIncrement } = useContext(CounterContext);
  return (
    <button onClick={setIncrement}>Increment</button>
  )
}

export default Increment