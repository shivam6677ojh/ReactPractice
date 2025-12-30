import React, { useContext } from "react";
import { AllState } from "../context/AllState";

const Reset = () => {
  const { Reset } = useContext(AllState);
  return (
    <button className="px-3 py-1 bg-gray-500 text-white rounded" onClick={Reset}>
      Reset
    </button>
  );
};

export default Reset;