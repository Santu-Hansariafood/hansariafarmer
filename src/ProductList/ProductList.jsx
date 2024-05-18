import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import maizeImage from "../Image/productImage/maize.webp";
import wheatImage from "../Image/productImage/wheat.webp";
import paddyImage from "../Image/productImage/paddy.webp";
import soyaImage from "../Image/productImage/soya.webp";
import brokenImage from "../Image/productImage/broken.webp";

const ProductList = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { farmerName, farmerId } = location.state || {};

  const productList = [
    { id: 1, name: "Maize", image: maizeImage },
    { id: 2, name: "Wheat", image: wheatImage },
    { id: 3, name: "Paddy", image: paddyImage },
    { id: 4, name: "Soya", image: soyaImage },
    { id: 5, name: "Broken Rice", image: brokenImage },
  ];

  const handleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([productId]);
    }
  };

  const handleContinue = async () => {
    if (selectedProducts.length === 0) {
      setError(true);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/farmerProducts",
          {
            farmerId,
            farmerName,
            selectedProducts,
          }
        );
        console.log("Response:", response.data);
        navigate("/address-selection", { state: { farmerId, farmerName, selectedProducts } });
      } catch (error) {
        console.error("Error saving products:", error);
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
    console.log("Go back...");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4">
      <h2 className="text-2xl font-bold mb-4">{farmerName} Wants to Sell</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {productList.map((product) => (
          <div key={product.id} className="relative group">
            <input
              type="checkbox"
              id={`product-${product.id}`}
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleProductSelection(product.id)}
              className="opacity-0 absolute h-0 w-0"
            />
            <label
              htmlFor={`product-${product.id}`}
              className={`cursor-pointer relative block rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
                selectedProducts.includes(product.id)
                  ? "bg-green-200"
                  : "bg-white"
              }`}
            >
              <div className="flex items-center p-2">
                {product.name}
                <img
                  src={product.image}
                  alt={product.name}
                  className="ml-auto h-10 w-10 object-cover rounded-full"
                />
              </div>
            </label>
          </div>
        ))}
      </div>
      {error && (
        <p className="text-red-500">Please select at least one product</p>
      )}
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
