<<<<<<< HEAD
import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
import CartItem from '../home/Cartitem';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Cart = () => {
  const { products, cartItems, getTotalCartAmount } = useContext(ShopContext);
=======

import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
import { FRAME } from '../components/Frame';
import CartItem from '../home/Cartitem';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Lottie from 'lottie-react';
import animationData from '../animations/animation.json';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <div className='mt-10'>
      <Navbar />
      <div className="bg-slate-100 flex flex-col items-center p-10 min-h-screen bg-cover bg-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Your Cart Items</h1>
=======
    <div>
      <Navbar />
      <div 
        className="bg-slate-100 flex flex-col items-center p-10 min-h-screen bg-cover bg-center"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Your Cart Items</h1>
          
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
          <p className="text-lg text-gray-900 mt-2">Review and manage your cart items below.</p>
        </div>
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center">
<<<<<<< HEAD
            {products.map((product) => {
              if (cartItems[product.id] > 0) {
                return <CartItem key={product.id} data={product} />;
              }
              return null;
=======
            {FRAME.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
            })}
          </div>
        </div>
        {totalAmount > 0 ? (
          <div className="text-center mt-8 space-y-4">
            <p className="text-2xl font-bold text-gray-800">Subtotal: ₹{totalAmount}</p>
            <div className="flex justify-center space-x-4">
<<<<<<< HEAD
              <button
                className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button
                className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]"
                onClick={() => navigate("/checkout", { state: { price: totalAmount } })}
              >
                Pay Now
              </button>
=======
              <button className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]" onClick={() => navigate("/")}>Continue Shopping</button>
              <button className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]" onClick={() => navigate("/pay")}>Pay Now</button>
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
            </div>
          </div>
        ) : (
          <h1 className="text-3xl font-semibold text-gray-700">Your Shopping Cart is Empty</h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
