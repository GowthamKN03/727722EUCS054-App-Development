<<<<<<< HEAD
// src/components/RemoveProduct.jsx
=======
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
import React, { useState } from 'react';

const RemoveProduct = ({ removeProduct }) => {
  const [productId, setProductId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (productId) {
      removeProduct(parseInt(productId));
      setProductId('');
    }
=======
    removeProduct(parseInt(productId));
    setProductId('');
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
  };

  return (
    <div className="mb-8 max-w-md mx-auto p-4 border border-gray-200 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Remove Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
<<<<<<< HEAD
          <label htmlFor="product-id" className="block text-sm font-medium text-gray-700 mb-1">
            Product ID
          </label>
=======
          <label htmlFor="product-id" className="block text-sm font-medium text-gray-700 mb-1">Product ID</label>
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
          <input
            id="product-id"
            type="number"
            placeholder="Enter product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
        >
          Remove Product
        </button>
      </form>
    </div>
  );
};

export default RemoveProduct;
