


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here if necessary
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Redirect to /home
    navigate('/home');
  };

  return (
    <nav className="h-14 bg-white px-6 flex items-center shadow-md">
      {/* Sidebar Toggle Button */}
      <FontAwesomeIcon 
        icon={faBars} 
        className="text-gray-600 cursor-pointer mr-4" 
        onClick={toggleSidebar} 
      />
      
      {/* Centered Text */}
      <span className="flex-1 text-center text-gray-900">Suprise Hub Admin Dashboard</span>
      
      {/* Profile Image with Dropdown */}
      <div className="relative ml-4">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/020/429/953/original/admin-icon-vector.jpg" 
          alt="profile" 
          className="w-9 h-9 rounded-full cursor-pointer"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
            <button 
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
