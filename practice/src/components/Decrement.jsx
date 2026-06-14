import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Decrement = () => {
    const { setDecrement } = useContext(CounterContext)
    return (
        <button onClick={setDecrement}>Decrement</button>
    )
}

export default Decrement