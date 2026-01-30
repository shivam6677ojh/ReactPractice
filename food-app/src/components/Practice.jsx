import { useState } from "react";



const Practice = () => {

    const [count, setCount] = useState(0);

    const counter = () => {
        return setCount(count+1);
    }



    return (
        <div>
            
            <p>Counter see</p>

            <h1>{count}</h1>

            <button onClick={counter}>Add </button>
            <br></br>
            <button onClick={() => setCount(count-1)}>dec</button>
            
        </div>
    );
}

export default Practice;
