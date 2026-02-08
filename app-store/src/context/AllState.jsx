import React, { createContext, useState } from "react";


export const AllState = createContext({
    Increment: () => { },
    Decrement: () => { },
    count: 0,
    Reset: () => { }
});


export const AllStateProvider = ({children}) => {
    const [count, setCount]  = useState(0);

    const value = {
        setIncrement: () => setCount(count + 1),
        setDecrement: () => setCount(count + 1),
        Reset: () => setCount(0),
    }


    return <AllState.Provider value={value}>{children}</AllState.Provider>
}