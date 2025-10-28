import { useState } from "react";
import Header from "./components/Header.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import { TodoContext } from "./store/TodoContext.jsx";



const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({ text: "", date: "" });

  // Handle input changes
  const handleInputChange = (e) => {
    const { value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [type === "date" ? "date" : "text"]: value, // if type is date than enter it to date value otherwise it should act as text value;
    }));
  };

  // Add a new todo
  const addItem = (e) => {
    if (!form.text || !form.date) return alert('Nothing to add please add item and date');

    // setTodos((prev) => {
    //   const item = [
    //     ...prev,
    //     {text: form.text, date: form.date, id: Date.now()}
    //   ]
    //   return item;
    // });

    // more optimized way
    setTodos((prev) => [
      ...prev,
      { text: form.text, date: form.date, id: Date.now() },
    ]);
    setForm({ text: "", date: "" });
    e.preventDefault();
  };
 
  // Delete a todo
  const deleteItem = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    // // <TodoContext.Provider value={todos}>
    //   <div className="max-w-lg mx-auto mt-8">
    //     <Header />
    //     <TodoInput
    //       text={form.text}
    //       date={form.date}
    //       handleInputChange={handleInputChange}
    //       addItem={addItem}
    //     />
    //     <TodoList todos={todos} onDelete={deleteItem} />
    //   </div>
    // </TodoContext.Provider>

    // we can provide object in value
    <TodoContext.Provider value={{
      todos : todos,
      deleteItem : deleteItem,
      addItem : addItem
    }}>    
      <div className="max-w-lg mx-auto mt-8">
        <Header />
        <TodoInput
          text={form.text}
          date={form.date}
          handleInputChange={handleInputChange}
        />
        <TodoList  />
      </div>

    </TodoContext.Provider>
    

  )
};

export default TodoApp;
