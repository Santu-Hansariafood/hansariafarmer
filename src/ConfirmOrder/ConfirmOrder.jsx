import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ConfirmOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    farmerId,
    farmerName,
    productName,
    totalBags,
    weightPerBag,
    ratePerTon,
    totalPrice,
    qualityParameters,
    address,
  } = location.state || {};
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleConfirmOrder = async () => {
    const orderData = {
      farmerId,
      farmerName,
      productName,
      totalBags,
      weightPerBag,
      ratePerTon,
      totalPrice,
      qualityParameters,
      address,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/orderByFarmer",
        orderData
      );
      const orderId = response.data._id; // Assuming the response contains the order ID

      Swal.fire({
        title: "Thank You!",
        text: `Your order has been confirmed. Order ID: ${orderId}`,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate(`/thankyou/${orderId}`, { state: { farmerId, farmerName } });
      });

      console.log("Order confirmed:", response.data);
    } catch (error) {
      console.error("Error confirming order:", error);

      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 border border-gray-200 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-3/4">
      <h2 className="text-lg font-semibold mb-4 text-center">Confirm Order</h2>

      <div className="mb-4">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Field</th>
              <th className="border p-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <strong>Farmer ID:</strong>
              </td>
              <td className="border p-2">{farmerId}</td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Farmer Name:</strong>
              </td>
              <td className="border p-2">{farmerName}</td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Product Name:</strong>
              </td>
              <td className="border p-2">{productName}</td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Total Bags:</strong>
              </td>
              <td className="border p-2">{totalBags}</td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Weight Per Bag (KG):</strong>
              </td>
              <td className="border p-2">{weightPerBag}</td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Rate Per Ton:</strong>
              </td>
              <td className="border p-2">{ratePerTon}</td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Total Price:</strong>
              </td>
              <td className="border p-2">{totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={toggleTableVisibility}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mb-4"
      >
        {isTableVisible ? "Hide Details" : "Show Details"}
      </button>

      {isTableVisible && (
        <>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Quality Parameters
            </h3>
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Parameter</th>
                  <th className="border p-2 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">
                    <strong>Broken:</strong>
                  </td>
                  <td className="border p-2">{qualityParameters.broken}%</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Fungus:</strong>
                  </td>
                  <td className="border p-2">{qualityParameters.fungus}%</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Damage:</strong>
                  </td>
                  <td className="border p-2">{qualityParameters.damage}%</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Small Gain:</strong>
                  </td>
                  <td className="border p-2">{qualityParameters.smallgain}%</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Moisture:</strong>
                  </td>
                  <td className="border p-2">{qualityParameters.moisture}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Pickup Location
            </h3>
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Location Detail</th>
                  <th className="border p-2 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">
                    <strong>Village:</strong>
                  </td>
                  <td className="border p-2">{address.village}</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Post:</strong>
                  </td>
                  <td className="border p-2">{address.post}</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Police Station:</strong>
                  </td>
                  <td className="border p-2">{address.policeStation}</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>District:</strong>
                  </td>
                  <td className="border p-2">{address.district}</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Pin:</strong>
                  </td>
                  <td className="border p-2">{address.pin}</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>State:</strong>
                  </td>
                  <td className="border p-2">{address.state}</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <strong>Landmark:</strong>
                  </td>
                  <td className="border p-2">{address.landmark}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="text-center mt-4">
        <button
          onClick={handleConfirmOrder}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mr-2"
        >
          Confirm Order
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none mx-2"
        >
          Cancel Order
        </button>
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none ml-2"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
