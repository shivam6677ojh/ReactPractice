import React, { createContext, useState } from "react";

export const AllState = createContext({
    setIncrement: () => { },
    setDecrement: () => { },
    count: 0,
    Reset: () => { }
});

export const AllStateProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const value = {
        count,
        setIncrement: () => setCount(c => c + 1),
        setDecrement: () => setCount(c => c - 1),
        Reset: () => setCount(0)
    };

    return <AllState.Provider value={value}>{children}</AllState.Provider>;
};