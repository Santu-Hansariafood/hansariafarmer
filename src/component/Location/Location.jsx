import React from "react";

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4234607104922!2d88.40781927454105!3d22.563260133314028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b7a8d7ebaf%3A0xec7eb347c6472d0e!2sHansaria%20Food%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1715687611974!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            title="Google Maps Location"
          ></iframe>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Head Office Address</h2>
            <p className="text-gray-700 mb-2">
              LA Block, Plot No.1, Primarc Square
            </p>
            <p className="text-gray-700 mb-2">
              Sector: 3, Bidhannagar, Kolkata
            </p>
            <p className="text-gray-700 mb-2">Kolkata, West Bengal(INDIA)</p>
            <p className="text-gray-700">700098</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
