import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FarmerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/registerFarmer`
        );
        const farmers = response.data.farmers;
        const selectedFarmer = farmers.find((farmer) => farmer._id === id);
        if (selectedFarmer) {
          setFarmer(selectedFarmer);
          setLoading(false);
        } else {
          console.log("Farmer not found");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching farmer details:", error);
        setLoading(false);
      }
    };

    fetchFarmerDetails();
  }, [id]);

  const handleBack = () => {
    navigate("/login");
  };

  const handleChooseProduct = () => {
    navigate("/product-list", { state: { farmerName: farmer.name, farmerId: id } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!farmer) {
    return <div>Farmer not found</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md text-center">
        <h2 className="text-2xl font-bold mb-4">Farmer Details</h2>
        <div className="flex flex-col items-center mb-4">
          <div className="h-32 w-32 overflow-hidden rounded-full mb-2">
            <img
              src={farmer.profilePhoto}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="font-semibold text-left">Name:</td>
                  <td className="text-left">{farmer.name}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">Father's Name:</td>
                  <td className="text-left">{farmer.fatherName}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">Mobile:</td>
                  <td className="text-left">{farmer.mobile}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">Email:</td>
                  <td className="text-left">{farmer.email}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">State:</td>
                  <td className="text-left">{farmer.state}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">District:</td>
                  <td className="text-left">{farmer.district}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">Police Station:</td>
                  <td className="text-left">{farmer.policeStation}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">Village:</td>
                  <td className="text-left">{farmer.village}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">Pin Code:</td>
                  <td className="text-left">{farmer.pinCode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleBack}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </button>
          <button
            onClick={handleChooseProduct}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Choose Your Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerDetails;
