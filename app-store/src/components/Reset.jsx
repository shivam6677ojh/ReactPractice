import React, { useContext, useState } from 'react'
import { AllState } from '../context/AllState'

const Reset = () => {
    const { Reset } = useContext(AllState);
    return (
        <button onClick={ () => Reset()}>Reset</button>
    )
}

export default Reset