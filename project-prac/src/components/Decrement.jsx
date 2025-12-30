import React, { useContext } from "react";
import { AllState } from "../context/AllState";

const Decrement = () => {
  const { setDecrement } = useContext(AllState);
  return (
    <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={setDecrement}>
      Decrement
    </button>
  );
};

export default Decrement;