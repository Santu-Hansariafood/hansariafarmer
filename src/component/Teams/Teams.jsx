import React from "react";

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sunita Agarwal",
      description: "Diractor",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Partha Mitra",
      description: "Manager",
      image: "../../Assets/Image/Teams/partha.webp",
    },
    {
      id: 3,
      name: "Prince Surahana",
      description: "",
      image: "/path/to/image3.jpg",
    },
    {
      id: 4,
      name: "Bob Johnson",
      description: "Full Stack Developer",
      image: "/path/to/image4.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
