import React, { useState, useEffect } from "react";

const useSearch = (data, searchTerm) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  return filteredData;
};


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

const ProductList = ({ products }) => {
  return (
    <div>
      <p>Showing {products.length} of {products.length} products</p>
      {products.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}
    </div>
  );
};


const Task4 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 },
    { id: 4, name: "Keyboard", price: 1000 },
    { id: 5, name: "Mouse", price: 500 },
  ];

  const filteredProducts = useSearch(products, searchTerm);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search</h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Task4;
