import React, { useRef, useState } from "react";

const TodoApp = () => {
    const inputRef = useRef();
    const dateRef = useRef();
    const [todos, setTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();
        const newtodo = inputRef.current.value.trim();
        const newtododate = dateRef.current.value;

        if (newtodo === "") {
            return alert("Nothing is there!!");
        }
        if(newtododate===""){
            return alert("date is not there");
        }
        const todoObj = {
            id: Date.now(), // unique id based on timestamp
            text: newtodo,
            date : newtododate
        };

        setTodos((prev) => [...prev, todoObj]);
        {localStorage.setItem("saved value", newtodo )}
        inputRef.current.value = "";
        dateRef.current.value = "";
    }

    const ondel = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        {localStorage.removeItem("saved value")}
    }

    return (
        <>

            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Todo App (useRef)</h1>

                <form onSubmit={addTodo} className="flex gap-2 mb-4">
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder="Enter a todo..."
                        className="border p-2 rounded w-64"
                    />
                    <input
                        type="date"
                        ref={dateRef}
                        className="border p-2 rounded w-64"
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        
                    >
                        Add
                    </button>
                </form>

                <ul className="w-64">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="bg-white p-2 mb-2 rounded shadow"
                        >
                            <div className="flex items-center jus ">

                            <p>{todo.text}</p>
                            <p>{todo.date}</p>
                            </div>
                            <button onClick={() => ondel(todo.id)}>Del</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoApp;