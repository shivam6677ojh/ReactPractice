export default function FoodItem({ name, bought, onToggle }) {
    return (
        <div className="flex justify-between items-center p-2 border rounded">
            <span
                className={`font-semibold ${bought ? "text-green-600 line-through" : "text-orange-600"
                    }`}
            >
                {name}
            </span>
            <button
                onClick={onToggle}
                className={`px-3 py-1 rounded text-white ${bought ? "bg-green-500 hover:bg-green-600" : "bg-cyan-500 hover:bg-cyan-600"
                    }`}
            >
                {bought ? "Bought" : "Buy"}
            </button>
        </div>
    );
}
