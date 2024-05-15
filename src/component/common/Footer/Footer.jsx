import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">ABCD</h2>
            <p className="mt-2">1234 Street Name, City Name</p>
            <p>Country</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <a href="/" className="mx-2 hover:text-gray-300">Home</a>
            <a href="/about" className="mx-2 hover:text-gray-300">About</a>
            <a href="/services" className="mx-2 hover:text-gray-300">Services</a>
            <a href="/contact" className="mx-2 hover:text-gray-300">Contact</a>
          </div>
          <div className="flex items-center">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm text-center">&copy; {new Date().getFullYear()} ABCD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
