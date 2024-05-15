import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const productList = [
    { id: 1, name: "Product 1", image: "product1.jpg" },
    { id: 2, name: "Product 2", image: "product2.jpg" },
    { id: 3, name: "Product 3", image: "product3.jpg" },
    { id: 4, name: "Product 4", image: "product4.jpg" },
    { id: 5, name: "Product 5", image: "product5.jpg" }
  ];

  const handleProductSelection = (productId) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  const handleContinue = () => {
    if (selectedProducts.length === 0) {
      setError(true);
    } else {
      // Proceed to the next step (address selection)
      navigate("/address-selection");
    }
  };

  const handleBack = () => {
    // Handle back action
    console.log("Go back...");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4">
      <h2 className="text-2xl font-bold mb-4">ABCD Farmer Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {productList.map((product) => (
          <div key={product.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`product-${product.id}`}
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleProductSelection(product.id)}
              className="mr-2"
            />
            <label htmlFor={`product-${product.id}`}>{product.name}</label>
            <img
              src={product.image}
              alt={product.name}
              className="ml-auto h-10 w-10 object-cover rounded-full"
            />
          </div>
        ))}
      </div>
      {error && <p className="text-red-500">Please select at least one product</p>}
      <div className="flex justify-center w-full mt-4">
        <button
          onClick={handleBack}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mr-2 focus:outline-none"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProductList;
