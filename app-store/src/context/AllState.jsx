import React, { createContext, useState } from "react";

export const AllState = createContext({
    setIncrement: () => {},
    setDecrement: () => {},
    count: 0,
    Reset: () => {}
});

export const AllStateProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const value = {
        count, // ✅ MUST PASS THIS
        setIncrement: () => setCount(prev => prev + 1),
        setDecrement: () => setCount(prev => prev - 1), // ✅ FIXED
        Reset: () => setCount(0),
    };

    return (
        <AllState.Provider value={value}>
            {children}
        </AllState.Provider>
    );
};
