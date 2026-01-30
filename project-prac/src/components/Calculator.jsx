import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (char) => {
    setValue(prev => prev + char);
  };

  const calculateResult = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  const clearInput = () => {
    setValue("");
  };

  return (
    <div className="bg-black h-screen w-screen text-white flex items-center justify-center">
      <div className="p-4 bg-gray-900 rounded">

        <input
          type="text"
          value={value}
          readOnly
          className="w-full mb-4 p-2 text-black"
          placeholder="0"
        />

        <div className="grid grid-cols-4 gap-2">
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={calculateResult}>=</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("0")}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
