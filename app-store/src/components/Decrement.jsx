import React, { useContext } from 'react'
import { AllState } from '../context/AllState'

const Decrement = () => {
    const { setDecrement } = useContext(AllState)
    return (
        <button onClick={setDecrement}>Decrement</button>
    )
}

export default Decrement