<<<<<<< HEAD
=======


>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';

const CartItem = (props) => {
  const { id, productname, price, productimage } = props.data;
<<<<<<< HEAD
  const { cartItems, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext);
=======
  const { cartItems, addToCart, removeFromCart, updatecartitem } = useContext(ShopContext);
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

  const handleInputChange = (e) => {
    const newAmount = Number(e.target.value);
    if (newAmount >= 0) {
<<<<<<< HEAD
      updateCartItem(newAmount, id);
=======
      updatecartitem(newAmount, id);
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
    }
  };

  return (
    <div className="w-4/5 flex justify-between items-center bg-white shadow-lg rounded-2xl my-5 p-5 transition-transform transform hover:scale-105">
      <img className="w-36 h-auto rounded-lg mr-5" src={productimage} alt={productname} />
      <div className="flex-grow text-lg text-gray-800">
        <p className="my-1"><b>{productname}</b></p>
        <p>Price: ₹{price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-transform transform hover:scale-105"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="w-12 text-center font-bold border border-gray-300 rounded-md p-1 mx-2"
          type="number"
<<<<<<< HEAD
          value={cartItems[id] || 0}
=======
          value={cartItems[id]}
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
          onChange={handleInputChange}
          min="0"
        />
        <button
          className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-transform transform hover:scale-105"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
<<<<<<< HEAD
=======

>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
