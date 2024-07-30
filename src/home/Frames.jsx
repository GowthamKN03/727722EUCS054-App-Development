import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Frames = (props) => {
  const { id, productname, price, productimage } = props.data;
  const { addToCart, cartItems, favItems, toggleFavorite } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartItemAmount = cartItems[id];
  const isFavorite = favItems.includes(id);

  const handleBuyNow = () => {
    navigate('/cust', { state: { price, productname, productimage } });
  };

  return (
    <div className='bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between items-center mx-4 my-6 overflow-hidden max-w-sm w-full'>
      <Link to={`/product/${id}/review`}>
        <img src={productimage} alt={productname} className='w-full h-64 object-cover rounded-t-lg' />
      </Link>
      <div className='p-4 flex flex-col justify-between w-full'>
        <div className='text-left text-gray-800'>
          <p className='text-lg font-semibold mb-1'>{productname}</p>
          <p className='text-xl font-bold text-gray-900'>₹{price}</p>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-full transition-transform transform hover:scale-105'
            onClick={() => addToCart(id)}
          >
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-transform transform hover:scale-105'
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
          <button
            onClick={() => toggleFavorite(id)}
            className={`p-2 rounded-full transition-transform transform hover:scale-105 ${isFavorite ? 'text-red-600' : 'text-gray-600'}`}
          >
            {isFavorite ? <AiFillHeart className="text-2xl" /> : <FiHeart className="text-2xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frames;
