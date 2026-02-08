import React, { useContext } from 'react'
import { AllState } from '../context/AllState'

const ShowState = () => {

    const {count} = useContext(AllState)
    return (
        <div><h1>{count}</h1></div>
    )
}

export default ShowState