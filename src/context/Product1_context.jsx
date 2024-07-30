import React, { createContext, useState } from 'react';
import { FRAME } from '../components/Frame';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < FRAME.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultReviews = () => {
  let reviews = {};
  for (let i = 1; i < FRAME.length + 1; i++) {
    reviews[i] = [];
  }
  return reviews;
};

export const Product1Context = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [favItems, setFavItems] = useState([]);
  const [reviews, setReviews] = useState(getDefaultReviews());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = FRAME.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const toggleFavorite = (itemId) => {
    setFavItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const addReview = (itemId, review) => {
    setReviews((prev) => ({ ...prev, [itemId]: [...prev[itemId], review] }));
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
    favItems,
    toggleFavorite,
    reviews,
    addReview,
    FRAME, 
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
