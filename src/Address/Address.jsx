import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Carousel from "../component/Carousel/Carousel";

const Address = () => {
  const [address, setAddress] = useState({
    village: "",
    post: "",
    policeStation: "",
    district: "",
    pin: "",
    state: "",
    landmark: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { farmerName, farmerId, selectedProducts } = location.state || {};

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleContinue = async () => {
    try {
      const response = await axios.post("http://localhost:3000/pickuplocations", {
        farmerId,
        farmerName,
        ...address,
      });
      console.log("Response:", response.data);
      navigate("/quality-parameter", {
        state: {
          farmerId,
          farmerName,
          selectedProducts,
          address,
        },
      });
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen mt-10">
      <div className="w-full md:w-1/2">
        <Carousel />
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <h2 className="text-2xl font-bold mb-4">Pickup Location for {farmerName} </h2>
          <div className="w-full max-w-xs">
            <label htmlFor="landmark" className="block mb-2">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={address.landmark}
              onChange={handleChange}
              placeholder="Enter Landmark"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
              required
            />
            <label htmlFor="village" className="block mb-2">Village</label>
            <input
              type="text"
              id="village"
              name="village"
              value={address.village}
              onChange={handleChange}
              placeholder="Enter Village"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
              required
            />
            <label htmlFor="post" className="block mb-2">Post</label>
            <input
              type="text"
              id="post"
              name="post"
              value={address.post}
              onChange={handleChange}
              placeholder="Enter Post Office"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
              required
            />
            <label htmlFor="policeStation" className="block mb-2">Police Station</label>
            <input
              type="text"
              id="policeStation"
              name="policeStation"
              value={address.policeStation}
              onChange={handleChange}
              placeholder="Enter Police Station"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
              required
            />
            <label htmlFor="district" className="block mb-2">District</label>
            <input
              type="text"
              id="district"
              name="district"
              value={address.district}
              onChange={handleChange}
              placeholder="Enter District"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
              required
            />
            <label htmlFor="pin" className="block mb-2">Pin</label>
            <input
              type="number"
              id="pin"
              name="pin"
              value={address.pin}
              onChange={handleChange}
              placeholder="pin"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
              required
              maxLength={6}
              minLength={6}
            />
            <label htmlFor="state" className="block mb-2">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="state"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
          </div>
          <div className="flex justify-center w-full mt-4">
            <div className="flex space-x-4">
              <button
                onClick={handleBack}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
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
    </div>
  );
};

export default Address;
