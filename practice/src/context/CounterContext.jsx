import React, { createContext, useState } from 'react'
import { AllState } from '../../../project-prac/src/context/AllState';


export const CounterContext = createContext({
    setIncrement: () => { },
    setDecrement: () => { },
    count: 0,
    Reset: () => { }
});

export const CounterProvider = ( {children} ) => {
    const [count, setCount] = useState(0);

    const value = {
        count,
        setIncrement: () => setCount(c => c + 1),
        setDecrement: () => setCount(c => c - 1),
        Reset: () => setCount(0)
    };

    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
};


