import React, { useState } from 'react';

const ArrayComponent = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);

    // States for operations
    const [addValue, setAddValue] = useState("");
    const [updateIndex, setUpdateIndex] = useState("");
    const [updateValue, setUpdateValue] = useState("");
    const [insertIndex, setInsertIndex] = useState("");
    const [insertValue, setInsertValue] = useState("");
    const [removeIndex, setRemoveIndex] = useState("");

    // Add number to end
    function handleAdd() {
        if (addValue.trim() === "") return;
        setArr([...arr, Number(addValue)]);
        setAddValue("");
    }

    // Update given index
    function handleUpdate() {
        const idx = Number(updateIndex);
        if (idx < 0 || idx >= arr.length || idx > 20) return alert("Invalid index");

        const newArr = [...arr];
        newArr[idx] = Number(updateValue);
        setArr(newArr);

        setUpdateIndex("");
        setUpdateValue("");
    }

    // Insert at index
    function handleInsert() {
        const idx = Number(insertIndex);
        if (idx < 0 || idx > arr.length) return alert("Invalid index");

        const newArr = [...arr];
        newArr.splice(idx, 0, Number(insertValue));
        setArr(newArr);

        setInsertIndex("");
        setInsertValue("");
    }

    // Remove value at index
    function handleRemove() {
        const idx = Number(removeIndex);
        if (idx < 0 || idx >= arr.length) return alert("Invalid index");

        const newArr = arr.filter((_, i) => i !== idx);
        setArr(newArr);

        setRemoveIndex("");
    }

    return (
        <div className="p-4 space-y-6">

            {/* --- Add Number --- */}
            <div>
                <input
                    type="text"
                    placeholder="Enter number"
                    className="border p-1"
                    value={addValue}
                    onChange={(e) => setAddValue(e.target.value)}
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white p-2 mx-2 rounded"
                >
                    Add Number
                </button>
            </div>

            {/* --- Insert at Index --- */}
            <div>
                <input
                    type="text"
                    placeholder="Index"
                    className="border p-1 w-20"
                    value={insertIndex}
                    onChange={(e) => setInsertIndex(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Value"
                    className="border p-1 w-20 mx-2"
                    value={insertValue}
                    onChange={(e) => setInsertValue(e.target.value)}
                />
                <button
                    onClick={handleInsert}
                    className="bg-purple-500 text-white p-2 rounded"
                >
                    Insert at Index
                </button>
            </div>

            {/* --- Update Value at Index --- */}
            <div>
                <input
                    type="text"
                    placeholder="Index"
                    className="border p-1 w-20"
                    value={updateIndex}
                    onChange={(e) => setUpdateIndex(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="New Value"
                    className="border p-1 w-24 mx-2"
                    value={updateValue}
                    onChange={(e) => setUpdateValue(e.target.value)}
                />
                <button
                    onClick={handleUpdate}
                    className="bg-yellow-500 text-white p-2 rounded"
                >
                    Update Index
                </button>
            </div>

            {/* --- Remove Index --- */}
            <div>
                <input
                    type="text"
                    placeholder="Index"
                    className="border p-1 w-20"
                    value={removeIndex}
                    onChange={(e) => setRemoveIndex(e.target.value)}
                />
                <button
                    onClick={handleRemove}
                    className="bg-red-500 text-white p-2 mx-2 rounded"
                >
                    Remove at Index
                </button>
            </div>

            {/* --- Display Array --- */}
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">Array Values:</h2>
                <div className="flex flex-wrap gap-4">
                    {arr.map((num, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 px-4 py-2 rounded text-lg"
                        >
                            {index}: {num}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArrayComponent;
