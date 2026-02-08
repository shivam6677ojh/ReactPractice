import React, { useState } from "react";

const ShoppingCart = () => {

    const [item, setitem] = useState("");
    const [store, setstore] = useState([]); 
    const [count, setcount] = useState(0);

    function Additems() {
        const value = item;
        const newStore = [...store, value];
        setstore(newStore);
        setcount(count + 1);
    }

    function deleteitem(){
        if(count > 0){
            const newstore = [...store];
            newstore.pop();
            setstore(newstore);
            setcount(count - 1);
        }
    }

    return <>
        <input
            type="text"
            placeholder="Enter item to add"
            onChange={(e) => setitem(e.target.value)}
        />

        <button onClick={Additems}>Add item</button>
        <button onClick={deleteitem}>Delitem</button>

        <ul>
            {store.map((val, idx) => (
                <li key={idx}>{val}</li>
            ))}
        </ul>

        <h2>Total count: {count}</h2>
    </>
}

export default ShoppingCart;



