import React, { useContext } from "react";
import { AllState } from "../context/AllState";

const Increment = () => {
  const { setIncrement } = useContext(AllState);
  return (
    <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={setIncrement}>
      Increment
    </button>
  );
};

export default Increment;