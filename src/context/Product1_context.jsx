<<<<<<< HEAD
import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const Product1Context = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [favItems, setFavItems] = useState([]);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        const data = await response.json();
        setProducts(data);

        const cart = getDefaultCart(data);
        const review = {};
        data.forEach((product) => {
          review[product.id] = [];
        });
        setCartItems(cart);
        setReviews(review);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);
=======
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
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
<<<<<<< HEAD
        let itemInfo = products.find((product) => product.id === Number(item));
=======
        let itemInfo = FRAME.find((product) => product.id === Number(item));
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
<<<<<<< HEAD
    setCartItems((prev) => {
      console.log("Adding to cart:", itemId, "Current state:", prev[itemId]);
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      console.log("Removing from cart:", itemId, "Current state:", prev[itemId]);
      return { ...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 };
    });
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => {
      console.log("Updating cart item:", itemId, "New Amount:", newAmount);
      return { ...prev, [itemId]: newAmount };
    });
=======
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
  };

  const toggleFavorite = (itemId) => {
    setFavItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const addReview = (itemId, review) => {
    setReviews((prev) => ({ ...prev, [itemId]: [...prev[itemId], review] }));
  };

<<<<<<< HEAD
  const contextValue = {
    products,
=======

  const contextValue = {
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
    favItems,
    toggleFavorite,
    reviews,
    addReview,
<<<<<<< HEAD
=======
    FRAME, 
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
<<<<<<< HEAD

export { Product1Context };
=======
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
