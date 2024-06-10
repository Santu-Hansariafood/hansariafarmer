import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Help = () => {
  const phoneNumber = "123-456-7890";
  const contactPerson = "John Doe";
  const whatsappNumber = "1234567890";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Help and Support
        </h2>
        <div className="text-center mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Contact Person:</span> {contactPerson}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone Number:</span> {phoneNumber}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-500 hover:text-green-700"
          >
            <FaWhatsapp size={24} />
            <span className="ml-2">WhatsApp Support</span>
          </a>
        </div>
        <div className="text-center">
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
