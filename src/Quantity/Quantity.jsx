import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quantity = () => {
  const [quantity, setQuantity] = useState({
    productName: "",
    totalBags: 0,
    weightPerBag: 0,
    ratePerTon: 0,
    totalPrice: 0
  });
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantity({ ...quantity, [name]: value });
    setShowButtons(false); // Reset showButtons when input changes
  };

  const calculateTotalPrice = () => {
    const { totalBags, ratePerTon, weightPerBag } = quantity;
    const ratePerKg = ratePerTon / 1000; // Convert rate from ton to kg
    const totalPrice = totalBags * weightPerBag * ratePerKg; // Total price calculation
    const roundedTotalPrice = Math.round(totalPrice * 100) / 100; // Round to two decimal places
    setQuantity({ ...quantity, totalPrice: roundedTotalPrice });
    setShowButtons(true); // Show buttons after calculating total price
  };

  const handleConfirmOrder = () => {
    // Redirect to the confirm page
    navigate("/confirm");
  };

  const handleBack = () => {
    // Handle back action
    console.log("Go back...");
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Quantity Component</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Product Name:</label>
        <input
          type="text"
          name="productName"
          value={quantity.productName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Total Bags:</label>
        <input
          type="number"
          name="totalBags"
          value={quantity.totalBags}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Weight Per Bag(KG):</label>
        <input
          type="number"
          name="weightPerBag"
          value={quantity.weightPerBag}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rate Per Ton:</label>
        <input
          type="number"
          name="ratePerTon"
          value={quantity.ratePerTon}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={calculateTotalPrice}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          Calculate Total Price
        </button>
      </div>
      {showButtons && (
        <div>
          <button
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mr-2"
          >
            Back
          </button>
          <button
            onClick={handleConfirmOrder}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
          >
            Confirm Order
          </button>
        </div>
      )}
      <div>
        <label className="block text-gray-700">Total Price:</label>
        <span className="inline-block bg-gray-200 py-2 px-3 rounded-md">{quantity.totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Quantity;
