
import React, { useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import loadingAnimation from '../animations/animation.json';  // Ensure you have a loading animation JSON file
import cartLoading from "../animations/cart.json";

const Navbar = ({ handleInputChange, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCartLoading, setCartLoading] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(path);
    }, 1000); 
  };

  const handleCartNavi = (e, path) => {
    e.preventDefault();
    setCartLoading(true);
    setTimeout(() => {
      setCartLoading(false);
      navigate(path);
    }, 1000);
  }

  const handleHome = (e) => handleNavigation(e, "/home");
  const handleCart = (e) => handleCartNavi(e, "/cart");

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsDropdownVisible(!isDropdownVisible);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  }

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate("/admin-login");
  }

  const handleFav = (e) => {
    e.preventDefault();
    navigate("/fav");
  }

  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl">
          <IoReorderThreeOutline />
        </div>
        <div className="relative flex items-center w-full max-w-sm md:max-w-md lg:max-w-lg">
          <input
            className="search-input pl-10 pr-4 py-2 rounded-md border-none focus:outline-none bg-gray-100 text-slate-900 placeholder-gray-400 w-full"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Surprise Your loved ones."
          />
          <IoSearchSharp className="absolute left-3 text-gray-400 text-xl" />
        </div>
        <div className="profile-container flex space-x-4 relative">
          <button className="home" onClick={handleHome}>
            <a href="#" className="text-white hover:text-gray-400">
              <IoIosHome className="text-2xl" />
            </a>
          </button>
          <button className="fav" onClick={handleFav}>
            <a href="#" className="text-white hover:text-gray-400">
              <FiHeart className="text-2xl" />
            </a>
          </button>
          <button className="cart" onClick={handleCart}>
            <a href="#" className="text-white hover:text-gray-400">
              <AiOutlineShoppingCart className="text-2xl" />
            </a>
          </button>
          <button className="login" onClick={handleLoginClick}>
            <a href="#" className="text-white hover:text-gray-400">
              <AiOutlineUserAdd className="text-2xl" />
            </a>
          </button>
          {isDropdownVisible && (
            <div className="dropdown-menu absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
              <a
                href="#"
                onClick={handleLogin}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Login
              </a>
              <a
                href="#"
                onClick={handleRegister}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Register
              </a>
              <a
                href="#"
                onClick={handleAdminLogin}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Admin
              </a>
            </div>
          )}
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="w-40 h-40">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        </div>
      )}
      {isCartLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="w-60 h-60">
            <Lottie animationData={cartLoading} loop={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;