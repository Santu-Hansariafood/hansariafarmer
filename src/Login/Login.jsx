import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    if (!username) {
      setError("Please enter your mobile number.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await axios.post(
        "https://main-server-9oo9.onrender.com/registerFarmer",
        {
          mobile: username,
          otp: "112233",
        }
      );
  
      const userExists = response.data.farmers.some(
        (farmer) => farmer.mobile === username
      );
  
      if (userExists) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        navigate("/product-list");
      } else {
        setError("Mobile number not found.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700 font-bold mb-2">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={loading} // Disable button while loading
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full mb-4"
        >
          {loading ? "Logging in..." : "Login"} {/* Button text changes based on loading state */}
        </button>
        <div className="flex justify-between text-sm">
          <Link
            to={"/register"}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Don't have an account? Register
          </Link>
          <Link
            to={"/forgot-password"}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
