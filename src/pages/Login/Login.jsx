import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobileNumber)) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    try {
      const response = await axios.post("https://main-server-9oo9.onrender.com/login", {
        mobileNumber,
        password,
      });

      const { success, farmer, message } = response.data;

      if (success) {
        login(farmer);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate(`/farmer-details/${farmer._id}`, { state: farmer });
        });
      } else {
        setError(message || "Invalid mobile number or password");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred during login. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
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
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
              pattern="\d{10}"
              title="Mobile number must be exactly 10 digits"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full mb-4"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between text-sm">
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Don't have an account? Register
          </Link>
          <Link
            to="/forgot-password"
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
