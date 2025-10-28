
import FoodItem from "./FoodItem.jsx"

export default function FoodList({ items, toggleBought }) {
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <FoodItem
                    key={index}
                    name={item.name}
                    bought={item.bought}
                    onToggle={() => toggleBought(index)}
                />
            ))}
        </div>
    );
}
