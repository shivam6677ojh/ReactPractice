
export default function InputBox({handleKeyDown}) {
    return (
        <>
            <input
                className="border w-full p-2 mb-2"
                type="text"
                // value={food}
                placeholder="Enter food item"
                onKeyDown={handleKeyDown}
            />
            {/* <p className="mb-4">
                Food Item Entered by user: <span className="font-semibold">{food}</span>
            </p> */}
        </>
    );
}
