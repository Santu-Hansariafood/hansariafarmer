import React from "react";
import { useNavigate } from "react-router-dom";

const NoOrders = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="text-center w-full max-w-md">
        <p className="text-xl font-bold mb-4">No previous orders found.</p>
        <button
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default NoOrders;
