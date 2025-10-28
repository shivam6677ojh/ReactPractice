import Header from "./components/header.jsx";
import InputBox from "./components/InputBox.jsx";
import FoodList from "./components/FoodList.jsx";
import { useState } from "react";

function App() {
  let [foodItems, setfoodItems] = useState([
    { name: "Ghee", bought: false },
    { name: "Green Vegetable", bought: false },
    { name: "Roti", bought: false },
    { name: "Dal", bought: false }
  ]);

  const handlechange = (event) => {
    if (event.key === "Enter") {
      let newFooditem = event.target.value;
      setfoodItems([...foodItems, { name: newFooditem, bought: false }]);
      event.target.value = null;
    }
  };

  // Toggle bought flag for the clicked item
  const toggleBought = (index) => {
    setfoodItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border p-4 rounded-lg bg-white w-80">
        <Header />
        <InputBox handleKeyDown={handlechange} />
        <FoodList items={foodItems} toggleBought={toggleBought} />
      </div>
    </div>
  );
}

export default App