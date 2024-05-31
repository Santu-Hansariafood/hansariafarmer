import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    mobileNumber: 'Mobile number should be 10 digits and start with a digit from 6 to 9',
    aadhaarNumber: 'Aadhaar number should be exactly 12 digits',
  });

  const validateInputs = () => {
    const errors = {};

    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Mobile number should be 10 digits and start with a digit from 6 to 9';
    }

    if (!/^\d{12}$/.test(aadhaarNumber)) {
      errors.aadhaarNumber = 'Aadhaar number should be exactly 12 digits';
    }

    return errors;
  };

  const handleShowPassword = async () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    try {
      const response = await fetch('http://localhost:3000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, aadhaarNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        setPassword(data.password);
        setShowPassword(true);
        setErrors({});
      } else {
        console.error('Failed to fetch password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        if (/^[6-9]\d{9}$/.test(value)) {
          delete newErrors.mobileNumber;
        } else {
          newErrors.mobileNumber = 'Mobile number should be 10 digits and start with a digit from 6 to 9';
        }
        return newErrors;
      });
    }
  };

  const handleAadhaarNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,12}$/.test(value)) {
      setAadhaarNumber(value);
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        if (/^\d{12}$/.test(value)) {
          delete newErrors.aadhaarNumber;
        } else {
          newErrors.aadhaarNumber = 'Aadhaar number should be exactly 12 digits';
        }
        return newErrors;
      });
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    setShowPassword(false);
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form className="flex flex-col space-y-4 h-3/4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col">
            <label htmlFor="mobileNumber" className="mb-2 font-semibold">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className={`p-2 border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} rounded`}
              required
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="aadhaarNumber" className="mb-2 font-semibold">
              Aadhaar Number:
            </label>
            <input
              type="text"
              id="aadhaarNumber"
              value={aadhaarNumber}
              onChange={handleAadhaarNumberChange}
              className={`p-2 border ${errors.aadhaarNumber ? 'border-red-500' : 'border-gray-300'} rounded`}
              required
            />
            {errors.aadhaarNumber && <p className="text-red-500 text-sm">{errors.aadhaarNumber}</p>}
          </div>
          <button
            type="button"
            onClick={handleShowPassword}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Show Password
          </button>
          <div className=''>
            <p>Back To Login <Link to="/login"
            className="text-blue-500 hover:text-blue-700 focus:outline-none">Login</Link></p>
            <p>Don't Have Account <Link to="/register"
            className="text-blue-500 hover:text-blue-700 focus:outline-none">Register</Link></p>
          </div>
        </form>
        {showPassword && (
          <div
            className="mt-6 p-4 border border-gray-300 rounded bg-gray-100 cursor-pointer"
            onClick={handleCopyPassword}
          >
            <p className="mb-2">Click to copy the password:</p>
            <div className="p-2 bg-white border border-gray-300 rounded text-center font-mono">
              {password}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
