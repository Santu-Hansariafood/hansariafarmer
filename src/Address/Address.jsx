import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../component/Carousel/Carousel";

const Address = () => {
  const [address, setAddress] = useState({
    village: "",
    post: "",
    policeStation: "",
    district: "",
    pinNumber: "",
    state: "",
    landmark:"",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    // Handle continue logic here
    console.log("Address:", address);
    // Redirect to the quality parameter component
    navigate("/quality-parameter");
  };

  const handleBack = () => {
    // Handle back action
    console.log("Go back...");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen mt-10">
      <div className="w-full md:w-1/2">
        <Carousel/>
      </div>
      <div className="w-full md:w-1/2">
        {/* Right Side - Address Form */}
        <div className="flex flex-col items-center justify-center h-full px-4">
          <h2 className="text-2xl font-bold mb-4">Select Pickup Location</h2>
          <div className="w-full max-w-xs">
          <label htmlFor="landmark" className="block mb-2">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={address.landmark}
              onChange={handleChange}
              placeholder="landmark"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="village" className="block mb-2">Village</label>
            <input
              type="text"
              id="village"
              name="village"
              value={address.village}
              onChange={handleChange}
              placeholder="Village"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="post" className="block mb-2">Post</label>
            <input
              type="text"
              id="post"
              name="post"
              value={address.post}
              onChange={handleChange}
              placeholder="Post"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="policeStation" className="block mb-2">policeStation</label>
            <input
              type="text"
              id="policeStation"
              name="policeStation"
              value={address.policeStation}
              onChange={handleChange}
              placeholder="policeStation"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="district" className="block mb-2">district</label>
            <input
              type="text"
              id="district"
              name="district"
              value={address.district}
              onChange={handleChange}
              placeholder="district"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="pin" className="block mb-2">pin</label>
            <input
              type="text"
              id="pin"
              name="pin"
              value={address.pin}
              onChange={handleChange}
              placeholder="pin"
              className="input-field mb-4 border border-gray-300 rounded-md px-4 py-2 w-80"
            />
            <label htmlFor="state" className="block mb-2">state</label>
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