import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quality = () => {
  const [qualityParameters, setQualityParameters] = useState({
    parameter1: "",
    parameter2: "",
    parameter3: "",
    parameter4: "",
    parameter5: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQualityParameters({ ...qualityParameters, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    // Handle continue logic here
    console.log("Quality Parameters:", qualityParameters);
    // Redirect to the next step (if applicable)
    navigate("/quantity");
  };

  const handleBack = () => {
    // Handle back action
    console.log("Go back...");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen">
      <div className="w-full md:w-1/2">
        {/* Left Side - Carousel Component */}
      </div>
      <div className="w-full md:w-1/2">
        {/* Right Side - Quality Parameters Form */}
        <div className="flex flex-col items-center justify-center h-full px-4">
          <h2 className="text-2xl font-bold mb-4">Quality Parameters</h2>
          <div className="w-full max-w-xs">
            <label htmlFor="parameter1" className="block mb-2">Parameter 1</label>
            <input
              type="text"
              id="parameter1"
              name="parameter1"
              value={qualityParameters.parameter1}
              onChange={handleChange}
              placeholder="Parameter 1"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="parameter1" className="block mb-2">Parameter 1</label>
            <input
              type="text"
              id="parameter1"
              name="parameter1"
              value={qualityParameters.parameter1}
              onChange={handleChange}
              placeholder="Parameter 1"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="parameter1" className="block mb-2">Parameter 1</label>
            <input
              type="text"
              id="parameter1"
              name="parameter1"
              value={qualityParameters.parameter1}
              onChange={handleChange}
              placeholder="Parameter 1"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="parameter1" className="block mb-2">Parameter 1</label>
            <input
              type="text"
              id="parameter1"
              name="parameter1"
              value={qualityParameters.parameter1}
              onChange={handleChange}
              placeholder="Parameter 1"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="parameter1" className="block mb-2">Parameter 1</label>
            <input
              type="text"
              id="parameter1"
              name="parameter1"
              value={qualityParameters.parameter1}
              onChange={handleChange}
              placeholder="Parameter 1"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            {/* Add similar input fields for parameter2, parameter3, parameter4, and parameter5 */}
          </div>
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
      </div>
    </div>
  );
};

export default Quality;
