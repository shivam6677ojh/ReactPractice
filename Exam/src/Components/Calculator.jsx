import React, { useState } from 'react'


const Calculator = () => {
    const [first, setfirst] = useState("");

    function handleChange(value){
        setfirst(first + value);
    }

    function calculate(){
        try{
            const res = eval(first).toString();
            setfirst(res);
        }catch(error){
            setfirst("Error");
        }
    }


    return (
        <div>
            <h1>Welcome to Calculator</h1>

            <input type="text" value={first} readOnly/>

            <button onClick={() => handleChange("1")}>1</button>
            <button onClick={() => handleChange("2")}>2</button>
            <button onClick={() => handleChange("3")}>3</button>
            <button onClick={() => handleChange("4")}>4</button>

            <button onClick={() => handleChange("5")}>5</button>
            <button onClick={() => handleChange("6")}>6</button>
            <button onClick={() => handleChange("7")}>7</button>
            <button onClick={() => handleChange("8")}>8</button>
            <button onClick={() => handleChange("9")}>9</button>
            <button onClick={() => handleChange("0")}>0</button>
            <button onClick={() => handleChange("+")}>+</button>
            <button onClick={() => handleChange("-")}>-</button>
            <button onClick={() => handleChange("*")}>*</button>
            <button onClick={() => handleChange("/")}>/</button>
            <button onClick={() => setfirst("")}>Clear</button>
            <button onClick={calculate}> = </button>
        </div>
    )
}

export default Calculator