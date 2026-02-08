import React, { useState } from 'react'

const TodoPractice = () => {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);

    const additem = () => {
        setTodo([...todo, value]);
        console.log(todo);
    }

    const deteleItem = (index) => {
        const newTodo = todo.filter((item, i) => i !== index);
        setTodo(newTodo);
    }



    return (
        <div>

            <h1>Welcome to Todo</h1>

            <input onChange={(e) => setValue(e.target.value)}  type="text" placeholder='Enter item to add..' />
            <button onClick={additem}>Add</button>
            <button onClick={deteleItem}>Delete</button>


            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoPractice