import React, { useState } from "react";


const Counter = () => {

    const [value, setValue] = useState(0);


    function increasevalue() {

        setValue(value + 1);

    }

    return <>

        <h1>Count: {value}</h1>

        <button onClick={increasevalue}>Increase  </button>

    </>
};


export default Counter