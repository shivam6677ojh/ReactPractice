import { useState, useMemo } from "react";

function UseContext() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const square = useMemo(() => {
        console.log("Calculating square...");
        return number * number;
    }, [number]);

    return (
        <div>
            <input
                type="number"
                onChange={(e) => setNumber(e.target.value)}
            />

            <p>Square: {square}</p>

            <button onClick={() => setCount(count + 1)}>
                Re-render ({count})
            </button>
        </div>
    );
}

export default UseContext;
