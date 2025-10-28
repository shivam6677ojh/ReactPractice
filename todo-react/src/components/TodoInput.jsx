import { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { TodoContext } from "../store/TodoContext";

const TodoInput = ({ text, date, handleInputChange }) => {
    const {addItem} = useContext(TodoContext)

    return (
        <form onSubmit={handleInputChange} className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow">
            <input
                type="text"
                value={text}
                onChange={handleInputChange}
                placeholder="Enter Todo here"
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-4 py-2 w-1/2 outline-none transition"
            />
            <input
                type="date"
                value={date}
                onChange={handleInputChange}
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-4 py-2 w-1/3 outline-none transition"
            />
            <button
                onClick={addItem}
                className="flex items-center cursor-pointer justify-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow transition font-semibold"
            >
                <MdAdd size={22} />
                Add
            </button>
        </form>
    )

};

export default TodoInput;
