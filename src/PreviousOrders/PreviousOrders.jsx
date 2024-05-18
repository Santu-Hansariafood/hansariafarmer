import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PreviousOrders = () => {
  const { farmerId } = useParams();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/orderByFarmer?farmerId=${farmerId}`
        );
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [farmerId]);

  const navigateBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4 mt-12">
      <h2 className="text-2xl font-bold mb-4">Previous Orders</h2>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto bg-white p-4 shadow-md rounded-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="border px-4 py-2">{order._id}</td>
                <td className="border px-4 py-2">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  {order.totalAmount
                    ? `$${order.totalAmount.toFixed(2)}`
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={navigateBack}
        className="mt-4 bg-black text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-800 hover:text-yellow-500 hover:scale-105 shadow-lg"
      >
        Back
      </button>
    </div>
  );
};

export default PreviousOrders;
