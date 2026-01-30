import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

const Counter = () => {
    const { count } = useContext(CounterContext)
  return (
    <div><h1>{count}</h1></div>
  )
}

export default Counter