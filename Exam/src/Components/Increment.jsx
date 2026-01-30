import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

const Increment = () => {
    const { setIncrement } = useContext(CounterContext)
    return (
        <button onClick={setIncrement} >Incre</button>
    )
}

export default Increment