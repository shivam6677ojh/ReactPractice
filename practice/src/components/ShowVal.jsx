import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const ShowVal = () => {
    const {count} = useContext(CounterContext)
  return (
    <div>{count}</div>
  )
}

export default ShowVal