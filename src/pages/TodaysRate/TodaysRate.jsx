import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TodaysRate = () => {
  const productName = "Maize";
  const currentDate = new Date().toLocaleDateString();
  const navigate = useNavigate();
  const [godowns, setGodowns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [godownsPerPage] = useState(5);
  const [selectedGodown, setSelectedGodown] = useState(null);

  useEffect(() => {
    const fetchGodowns = async () => {
      try {
        const response = await axios.get(
          "https://main-server-2kc5.onrender.com/godown"
        );
        setGodowns(response.data);
      } catch (error) {
        console.error("Error fetching godown data:", error);
      }
    };

    fetchGodowns();
  }, []);

  const indexOfLastGodown = currentPage * godownsPerPage;
  const indexOfFirstGodown = indexOfLastGodown - godownsPerPage;
  const currentGodowns = godowns.slice(indexOfFirstGodown, indexOfLastGodown);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(godowns.length / godownsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleShowQuality = (godown) => {
    setSelectedGodown(godown);
  };

  const handleBackToGodowns = () => {
    setSelectedGodown(null);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 mt-12">{`${productName} Today's Godown Rates - ${currentDate}`}</h1>

      {selectedGodown ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">{`Quality Parameters for ${selectedGodown.name}`}</h2>
          <div className="border rounded-lg overflow-hidden">
            <div className="flex bg-gray-200 font-bold">
              <div className="flex-1 p-2 text-center border-r">Parameter</div>
              <div className="flex-1 p-2 text-center border-r">Accepted</div>
              <div className="flex-1 p-2 text-center">Up to</div>
            </div>
            {selectedGodown.quality.map((item, index) => (
              <div className="flex border-t" key={index}>
                <div className="flex-1 p-2 text-center border-r">
                  {item.parameter}
                </div>
                <div className="flex-1 p-2 text-center border-r">
                  {item.accepted}
                </div>
                <div className="flex-1 p-2 text-center">{item.upto}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center my-4">
            <button
              onClick={handleBackToGodowns}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
            <div className="flex-1 mb-6 lg:mb-0">
              <h2 className="text-xl font-semibold mb-2">Warehouse Rates</h2>
              <div className="border rounded-lg overflow-hidden">
                <div className="flex bg-gray-200 font-bold">
                  <div className="flex-1 p-2 text-center border-r">No.</div>
                  <div className="flex-1 p-2 text-center border-r">
                    Godown Name
                  </div>
                  <div className="flex-1 p-2 text-center border-r">
                    Location
                  </div>
                  <div className="flex-1 p-2 text-center border-r">Rate</div>
                  <div className="flex-1 p-2 text-center">
                    Quality Parameters
                  </div>
                </div>
                {currentGodowns.map((godown, index) => (
                  <div className="flex border-t" key={godown._id}>
                    <div className="flex-1 p-2 text-center border-r">
                      {indexOfFirstGodown + index + 1}
                    </div>
                    <div className="flex-1 p-2 text-center border-r">
                      {godown.name}
                    </div>
                    <div className="flex-1 p-2 text-center border-r">
                      {godown.location.name}, {godown.location.landmark},{" "}
                      {godown.location.state}
                    </div>
                    <div className="flex-1 p-2 text-center border-r">
                      {godown.rate}
                    </div>
                    <div className="flex-1 p-2 text-center">
                      <button
                        onClick={() => handleShowQuality(godown)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg transition duration-300"
                      >
                        Show Quality
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={
                    currentPage === Math.ceil(godowns.length / godownsPerPage)
                  }
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                Terms and Conditions
              </h2>
              <div className="mt-2 text-gray-500">
                <p>1: Quiental per 1 kg Unloading</p>
                <p>2: Unloading Charges 8Rs Per Quintal</p>
                <p>3: Instant Payment after Unloading</p>
                <p>4: In claim there will be single discount</p>
                <p>5: If Moisture is above 16% then Track will Rejected</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Contact Person</h2>
            <div className="mt-2 text-gray-500">
              <p>John Doe: 1234567890</p>
              <p>Jane Smith: 0987654321</p>
              <p>Michael Johnson: 1122334455</p>
            </div>
          </div>

          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold mb-2">Note:</h2>
            <p>
              If you want to book more than 100MT, contact 54545454 (person
              name)
            </p>
          </div>
          <div className="flex justify-center items-center my-4">
            <button
              onClick={handleBack}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodaysRate;
