import React, { useReducer } from "react";

const initialState = {
    name: "",
    email: "",
    password: ""
};

function formReducer(state, action) {
    switch (action.type) {
        case "NAME":
            return { ...state, name: action.payload };

        case "EMAIL":
            return { ...state, email: action.payload };

        case "PASSWORD":
            return { ...state, password: action.payload };

        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state); // JSON data
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form using useReducer</h1>

            <pre>{JSON.stringify(state, null, 2)}</pre>

            <input
                placeholder="Name"
                onChange={(e) =>
                    dispatch({ type: "NAME", payload: e.target.value })
                }
            />

            <input
                placeholder="Email"
                onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                }
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                }
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Reducer;
