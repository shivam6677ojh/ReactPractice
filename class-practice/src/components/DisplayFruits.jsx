import React, { useState } from 'react';

const DisplayFruits = () => {
    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']);

    function handleAddFruit() {
        const fruit = prompt("Enter a fruit to add in the list:");
        if (!fruit || fruit.trim() === '') {
            return;
        }
        // create a new array (React needs immutability)
        setFruits([...fruits, fruit]);
    }

    return (
        <div>
            <h2>Fruits List:</h2>
            <ul>
                {fruits.map((fruit, idx) => (
                    <li key={idx}>{fruit}</li>
                ))}
            </ul>
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    );
};

export default DisplayFruits;
