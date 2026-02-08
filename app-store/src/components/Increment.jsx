import React, { useContext, useState } from 'react'
import { AllState } from '../context/AllState';

const Increment = () => {
    const { setIncrement } = useContext(AllState);
    return (
        <button onClick={() => setIncrement()}>Increment</button>
    )
}

export default Increment