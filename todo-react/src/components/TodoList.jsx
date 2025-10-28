import { useContext } from "react";
import { TodoContext } from "../store/TodoContext.jsx";
import TodoItem from "./TodoItem.jsx"

const TodoList = () => {
    const {todos} = useContext(TodoContext)
    // no need here of deleteItem becuase in ToItems.jsx we are using it 
    // const {todos, deleteItem} = useContext(TodoContext) // see here we are doing the dependencies on props less by using use context 
    // use context is use for reduce the strain on props drilling

    return(
        <div className="w-full max-w-2xl mx-auto mt-4">
            {todos.length === 0 ? (
                <p className="text-center text-gray-400 italic p-8 bg-white rounded-lg shadow">
                    No todos yet
                </p>
            ) : (
                <div className="space-y-2">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            date={todo.date}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default TodoList;
