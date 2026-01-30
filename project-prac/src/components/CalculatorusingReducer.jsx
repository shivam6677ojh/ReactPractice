import React, { useReducer } from "react";

const initialState = {
  value: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { value: state.value + action.payload };

    case "CLEAR":
      return { value: "" };

    case "RESULT":
      try {
        return { value: eval(state.value).toString() };
      } catch {
        return { value: "Error" };
      }

    default:
      return state;
  }
}

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-black h-screen w-screen text-white flex items-center justify-center">
      <div className="bg-gray-900 p-4 rounded w-64">

        <input
          type="text"
          value={state.value}
          readOnly
          className="w-full mb-4 p-2 text-black"
        />

        <div className="grid grid-cols-4 gap-2">

          <button onClick={() => dispatch({ type: "CLEAR" })}>C</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "+" })}>+</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "-" })}>-</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "*" })}>*</button>

          <button onClick={() => dispatch({ type: "ADD", payload: "7" })}>7</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "8" })}>8</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "9" })}>9</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "/" })}>/</button>

          <button onClick={() => dispatch({ type: "ADD", payload: "4" })}>4</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "5" })}>5</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "6" })}>6</button>
          <button onClick={() => dispatch({ type: "RESULT" })}>=</button>

          <button onClick={() => dispatch({ type: "ADD", payload: "1" })}>1</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "2" })}>2</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "3" })}>3</button>
          <button onClick={() => dispatch({ type: "ADD", payload: "0" })}>0</button>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
