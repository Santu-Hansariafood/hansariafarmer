import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Logo from "../../../Image/logo/hansaria.webp";

const handleScroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center">
        <div className="mr-4">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
        </div>
        <nav className={`hidden md:flex space-x-4 ${isOpen ? "hidden" : ""}`}>
          <a
            href="#home"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "about")}
          >
            About
          </a>
          <a
            href="#teams"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "teams")}
          >
            Teams
          </a>
          <a
            href="#location"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "location")}
          >
            Location
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center">
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto"
          >
            Logout
          </button>
        ) : (
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
          >
            Login
          </a>
        )}
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 py-4 px-6 flex flex-col items-start space-y-2">
          <a
            href="#home"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "about")}
          >
            About
          </a>
          <a
            href="#teams"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "teams")}
          >
            Teams
          </a>
          <a
            href="#location"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "location")}
          >
            Location
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300"
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
