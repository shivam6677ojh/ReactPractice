import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

const Decrement = () => {
    const { setDecrement } = useContext(CounterContext)
    return (
        <button onClick={setDecrement}>Decre</button>
    )
}

export default Decrement