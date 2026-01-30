import { createContext, useState } from "react";

export const CounterContext = createContext({
    Increment: () => { },
    Decrement: () => { },
    count: 0,
    Reset: () => { },
});


export const CounterStateProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const value = {
        count,
        setIncrement: () =>  setCount(c => c+1),
        setDecrement: () => setCount(c => c-1),
        Reset: () => setCount(0)
    }


    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
} 
