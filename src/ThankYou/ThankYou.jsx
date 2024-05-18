import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { farmerId, farmerName, orderId } = location.state || {};

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleViewFarmerDetails = () => {
    navigate(`/farmer-details/${farmerId}`);
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
        <p className="mb-2"><strong>Order ID:</strong> {orderId}</p>
        <div className="mt-4">
          <button
            onClick={handleBackToHome}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Back to Home
          </button>
          <button
            onClick={handleViewFarmerDetails}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md ml-2"
          >
            View Farmer Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
