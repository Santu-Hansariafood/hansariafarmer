import React from "react";

const About = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8">
          <img src="/path/to/image.jpg" alt="Profile" className="w-full mb-4" />
          <div>
            <h2 className="text-xl font-bold mb-2">Gopal Agarwal</h2>
            <p className="text-gray-600">CEO and Founder</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-gray-300 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8">
          <h2 className="text-2xl text-bold pb-2">From The Desk of CEO and Founder</h2>
          <p className="text-lg text-gray-700">
            Hansaria Food Private Limited is a pioneering agritech company dedicated to empowering
            Indian agriculture by bridging the gap between farmers and
            corporations. We provide vital financial support in the form of
            loans to multinational corporations (MNCs) and Micro, Small, and
            Medium Enterprises (MSMEs), enabling them to procure agricultural
            produce directly from farmers. By facilitating these partnerships,
            we create opportunities for farmers to sell their crops to renowned
            companies like Hansaria Food, fostering economic growth, and
            enhancing the overall agricultural ecosystem.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
