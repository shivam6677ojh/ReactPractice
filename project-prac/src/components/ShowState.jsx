import React, { useContext } from "react";
import { AllState } from "../context/AllState";

const ShowState = () => {
  const { count } = useContext(AllState);
  return <div className="text-lg font-semibold">Count: {count}</div>;
};

export default ShowState;