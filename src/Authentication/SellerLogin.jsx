

import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../admin1/Navbar'; 
import Sidebar from '../admin1/Sidebar'; 

const SellerPage = () => {
  const [product, setProduct] = useState({
    productname: '',
    productimage: '',
    rating: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/products/bulk', [product]);
      console.log(response.data);
      setProduct({
        productname: '',
        productimage: '',
        rating: '',
        price: ''
      });
    } catch (error) {
      console.error('There was an error saving the product!', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 h-screen bg-gray-900">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Add a New Product</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="productname" className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                <input
                  type="text"
                  name="productname"
                  value={product.productname}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  placeholder="Enter rating"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="productimage" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                <input
                  type="text"
                  name="productimage"
                  value={product.productimage}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Product</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerPage;
