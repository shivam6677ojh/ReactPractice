
import React, { useState } from "react";

const TodoApp = () => {
    const [value, setValue] = useState("");
    const [store, setStore] = useState([]);
    const [error, setError] = useState("");

    function additem() {
        const v = value;
        if (v === "") {
            setError("Error while checking value its empty");
        }
        console.log(value);
        setStore([...store, v]);
        setValue("")
    }

    function delitem() {
        setStore([]);
    }

    return <>

        <div>
            <h1>Welcome to dodo</h1>

            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter item to add" />
            <button onClick={additem} >Add item</button>
            <button onClick={delitem} >Delete item</button>

        </div>

        <div>
            <ul>
                {store.map((value, item) => (
                    <li key={item} >{value}</li>
                ))}
            </ul>
        </div>

        {error && <div>{error}</div>}

    </>
}

export default TodoApp;

