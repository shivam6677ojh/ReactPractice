import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

const Reset = () => {
    const { Reset } = useContext(CounterContext)
    return (
        <button onClick={Reset}>Reset</button>
    )
}

export default Reset