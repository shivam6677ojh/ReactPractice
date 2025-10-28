import React, { useState } from 'react'

const Counter = () => {

    const [count, setcount] = useState(0);

    const onHandleIn = () => {
        return (
            setcount(count+1)
        )
    };
    const onHandleDc = () => {
        return (
            setcount(count-1)
        )
    };


    return (
        <>
        <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>

            <p className='text-5xl'>{count}</p>
            <div className='flex bg-black w-fit h-fit gap-5'>

            <button className='bg-red-400 border-2 cursor-pointer border-gray-300 rounded-xl' onClick={onHandleIn}>increase</button>
            <button className='bg-red-400 border-2 cursor-pointer border-gray-300 rounded-xl' onClick={onHandleDc}>decrease</button>
            </div>
        </div>
        </>
    )
}

export default Counter