import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Head Office</h2>
            <p className="mt-2">Primarc Square, Salt Lake Bypass</p>
            <p>LA Block, Sector: 3, Bidhannagar</p>
            <p>Kolkata, West Bengal 700098</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <a href="/" className="mx-2 hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="mx-2 hover:text-gray-300">
              About
            </a>
            <a href="/services" className="mx-2 hover:text-gray-300">
              Services
            </a>
            <a href="/contact" className="mx-2 hover:text-gray-300">
              Contact
            </a>
            <a href="/career" className="mx-2 hover:text-gray-300">
              Career
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-white hover:bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 mr-4"
            >
              <FaFacebook className="h-7 w-7" title="Facebook" />
            </a>
            <a
              href="#"
              className="text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mr-4"
            >
              <FaInstagramSquare className="h-7 w-7" title="Instagram" />
            </a>
            <a href="#" className="text-white hover:text-red-500 mr-4">
              <IoLogoYoutube className="h-7 w-7" title="Youtube" />
            </a>
            <a href="#" className="text-white hover:text-blue-500 mr-4">
              <FaLinkedin className="h-7 w-7" title="Linkdin" />
            </a>
            <a href="#" className="text-white hover:text-green-500 mr-4">
              <FaWhatsapp className="h-7 w-7" title="Whats App" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Hansaria Food Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
