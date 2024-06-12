import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import NoOrders from "../../component/common/NoOrders/NoOrders";

const PreviousOrders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const mobileNumber = location.state?.mobileNumber;

  useEffect(() => {
    const fetchPreviousOrders = async () => {
      try {
        const response = await axios.get(`https://main-server-9oo9.onrender.com/bill`);
        const allOrders = response.data;
        const farmerOrders = allOrders.filter(
          (order) => order.mobileNumber === mobileNumber
        );
        setOrders(farmerOrders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching previous orders:", error);
        setLoading(false);
      }
    };

    fetchPreviousOrders();
  }, [mobileNumber]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!orders.length) {
    return <NoOrders/>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white p-8 shadow-md rounded-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          Previous Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Bill No</th>
                <th className="px-4 py-2 border">Lorry Number</th>
                <th className="px-4 py-2 border">Farmer Name</th>
                <th className="px-4 py-2 border">Mobile Number</th>
                <th className="px-4 py-2 border">Payable Amount</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="border px-4 py-2">{order.billNo}</td>
                  <td className="border px-4 py-2">{order.lorryNumber}</td>
                  <td className="border px-4 py-2">{order.farmerName}</td>
                  <td className="border px-4 py-2">{order.mobileNumber}</td>
                  <td className="border px-4 py-2">{order.payableAmount}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() =>
                        navigate(`/order-details/${order._id}`, {
                          state: { billData: order },
                        })
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between flex-wrap">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousOrders;
