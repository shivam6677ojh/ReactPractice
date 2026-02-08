import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Features/counter/counterSlice.jsx";

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
