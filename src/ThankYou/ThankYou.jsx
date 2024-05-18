import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { farmerId, farmerName } = location.state || {};

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Thank You!</h1>
        <p className="mb-4">Your order has been confirmed.</p>
        <p className="mb-2">
          <strong>Farmer ID:</strong> {farmerId}
        </p>
        <p className="mb-2">
          <strong>Farmer Name:</strong> {farmerName}
        </p>
        <button
          onClick={handleBackToHome}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
