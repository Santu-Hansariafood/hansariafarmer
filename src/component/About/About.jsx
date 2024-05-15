import React from 'react';

const About = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Side (Image and Name/Designation) */}
      <div className="md:w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8">
          <img src="/path/to/image.jpg" alt="Profile" className="w-full mb-4" />
          <div>
            <h2 className="text-xl font-bold mb-2">John Doe</h2>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </div>
      {/* Right Side (Description) */}
      <div className="md:w-1/2 bg-gray-300 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8">
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere fringilla ante, in placerat est fermentum nec. Phasellus condimentum neque id velit vulputate, a varius justo viverra. Nullam volutpat dolor in mauris pharetra, eu porttitor tortor hendrerit. Aenean sagittis nunc eu nisl mollis interdum. Nullam ac sem in lectus gravida blandit sit amet a tellus. Curabitur rhoncus commodo felis. Maecenas ac dolor ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
