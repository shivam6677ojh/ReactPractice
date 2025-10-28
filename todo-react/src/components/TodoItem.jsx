import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoContext } from "../store/TodoContext.jsx";

const TodoItem = ({ id, text, date }) => {
    const { deleteItem } = useContext(TodoContext)
 
    return (
        <div className="flex justify-between items-center bg-white px-6 py-3 rounded-lg mb-3 shadow hover:shadow-md transition">
            <span className="text-lg font-semibold text-gray-800">{text}</span>
            <div className="flex items-center gap-5">
                <span className="text-gray-500 text-sm">{date}</span>
                <button
                    onClick={
                        ()=>deleteItem(id)  // if we only wite onClick = {deleteItem(id)} than error will come 
                    } 
                    className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                    title="Delete"
                >
                    <MdDelete size={20} />
                </button>
            </div>
        </div>
    )
}

export default TodoItem;
