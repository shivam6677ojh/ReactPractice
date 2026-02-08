import React, { useState } from "react";

const Calculator = () => {

  const [val, setVal] = useState("");

  const handleClick = (v) => {
    setVal(prev => prev + v);
  };

  const calculate = () => {
    try {
      setVal(eval(val).toString());   // simple way
    } catch {
      setVal("Error");
    }
  };

  const clear = () => setVal("");

  return (
    <div style={{ width: "200px" }}>

      <input value={val} readOnly />

      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>

      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>

      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>

      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>

    </div>
  );
};

export default Calculator;
