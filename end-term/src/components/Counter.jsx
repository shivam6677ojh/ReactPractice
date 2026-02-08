import { useReducer } from 'react'

function reducer(state, action) {
    // if (action.type === "ABC") {
    //   return state + 1;
    // } else if (action.type === "CDE") {
    //   return state - 1;
    // } else {
    //   return 0;
    // }

    switch (action.type) {
        case "ABC":
            return state + 1;
        case "CDE":
            return state - 1;
        case "RES":
            return 0;
        default:
            return 0;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>{state}</h1>

            <div>
                <button onClick={() => dispatch({ type: "ABC" })}>+</button>
                <button onClick={() => dispatch({ type: "CDE" })}>-</button>
                <button onClick={() => dispatch({ type: "RES" })}>0</button>
            </div>
        </>
    );
};

export default Counter;
