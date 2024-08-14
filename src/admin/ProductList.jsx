// src/components/ProductList.jsx
import React from 'react';

const ProductList = ({ products = [] }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Product List</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-1">₹{product.price}</p>
              </div>
              <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
