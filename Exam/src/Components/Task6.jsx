import React, { useState } from 'react'

const Task6 = () => {
    const [val, setVal] = useState([]);
    const [input, setInput] = useState("");

    const Additem = () => {
        const v = input;
        setVal([...val, v]);
        localStorage.setItem("value",val);
        setInput("");
    }

    const delitem = () => {
        setVal(val.slice(0,-1));
        console.log("delitem");
    }


    return (
        <div>
            <h2>Todo - APP</h2>


            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" placeholder='Enter item name' 
            />

            <button onClick={Additem} >Add item</button>
            <button onClick={delitem}>Del item</button>

            <div>
                <ul>
                    {
                        val.map((item,idx) => (
                            <li key={idx}>{item}</li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default Task6