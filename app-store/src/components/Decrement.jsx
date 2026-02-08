import React, { useContext } from 'react'
import { AllState } from '../context/AllState'

const Decrement = () => {
    const { Decrement } = useContext(AllState)
    return (
        <button onClick={() => Decrement()}>Decrement</button>
    )
}

export default Decrement