import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Carousel from "../component/Carousel/Carousel";

const Quality = () => {
  const [qualityParameters, setQualityParameters] = useState({
    broken: "",
    fungus: "",
    damage: "",
    smallgain: "",
    moisture: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { farmerId, farmerName, selectedProducts, address } =
    location.state || {};

  const handleChange = (e) => {
    setQualityParameters({
      ...qualityParameters,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/quality-parameter",
        {
          farmerId,
          farmerName,
          ...qualityParameters,
        }
      );
      console.log("Quality Parameters:", qualityParameters);
      console.log("Response:", response.data);
      navigate("/quantity", {
        state: {
          farmerId,
          farmerName,
          selectedProducts,
          qualityParameters,
          address,
        },
      });
    } catch (error) {
      console.error("Error saving quality parameters:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen">
      <div className="w-full md:w-1/2">
        <Carousel/>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <h2 className="text-2xl font-bold mb-4">
            Quality Parameters {farmerName}
          </h2>
          <div className="w-full max-w-xs">
            <label htmlFor="broken" className="block mb-2">
              Broken
            </label>
            <input
              type="text"
              id="broken"
              name="broken"
              value={qualityParameters.broken}
              onChange={handleChange}
              placeholder="Broken Parameter"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="fungus" className="block mb-2">
              Fungus
            </label>
            <input
              type="text"
              id="fungus"
              name="fungus"
              value={qualityParameters.fungus}
              onChange={handleChange}
              placeholder="Fungus Parameter"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="damage" className="block mb-2">
              Damage
            </label>
            <input
              type="text"
              id="damage"
              name="damage"
              value={qualityParameters.damage}
              onChange={handleChange}
              placeholder="Damage Parameter"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="smallgain" className="block mb-2">
              Small Gain
            </label>
            <input
              type="text"
              id="smallgain"
              name="smallgain"
              value={qualityParameters.smallgain}
              onChange={handleChange}
              placeholder="Small Gain Parameter"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="moisture" className="block mb-2">
              Moisture
            </label>
            <input
              type="text"
              id="moisture"
              name="moisture"
              value={qualityParameters.moisture}
              onChange={handleChange}
              placeholder="Moisture Parameter"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
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
