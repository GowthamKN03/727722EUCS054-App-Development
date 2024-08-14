import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default receipt details if no state is provided
  const receipt = location.state || {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    amount: 0 // Amount is taken directly from location.state if available
  };

  // Generate a random receipt ID
  const generateRandomID = () => {
    return "REC" + Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
  };

  const randomReceiptID = generateRandomID();

  // Get current date and time
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const currentDay = today.getDate();  // Renamed variable
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const currentDate = `${currentDay}/${month}/${year}`;  // Updated to use the new variable name
  const currentTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  const handleExit = () => {
    navigate('/');
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    console.log(location.state); // Check if data is correctly passed
  }, [location.state]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <div className="text-center mb-6">
        {/* Store Name and Logo */}
        <img src="LOGO_URL_HERE" alt="Surprise Hub Logo" className="mx-auto mb-4 w-12 h-12 rounded-full" />
        <h1 className="text-3xl font-bold">Surprise Hub</h1>
      </div>
      
      <h2 className="text-center text-2xl font-semibold mb-6">Payment Receipt</h2>
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex justify-between mb-4 border-b border-gray-300 pb-4">
          <h3 className="text-xl font-semibold">Receipt ID: {randomReceiptID}</h3>
          <div>
            <p>Date: {currentDate}</p>
            <p>Time: {currentTime}</p>
          </div>
        </div>
        <div className="flex flex-col">
          {/* Customer Information */}
          <div className="flex justify-between py-2">
            <span className="font-medium">Customer Name:</span>
            <span>{receipt.firstName} {receipt.lastName}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Shipping Address:</span>
            <span>
              {receipt.address1}, {receipt.address2}, {receipt.city}, {receipt.state} - {receipt.zip}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Contact Information:</span>
            <span>Phone: {receipt.phone}, Email: {receipt.email}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Total Amount:</span>
            <span>₹{receipt.amount}</span> {/* Display the total amount */}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg font-semibold">Thank you for shopping with Surprise Hub!</p>
        <p>If you have any questions, please contact our customer service at <strong>+91-12345-67890</strong>.</p>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Print
        </button>
        <button
          onClick={handleExit}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Receipt;
