import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../admin1/Navbar';
import Sidebar from '../admin1/Sidebar';

const Admina = () => {
  const [product, setProduct] = useState({
    productname: '',
    productimage: '',
    rating: '',
    price: ''
  });
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Error fetching products. Please check the console for details.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (filter === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === filter));
    }
  }, [filter, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/products/bulk', [product]);
      setProducts([...products, response.data[0]]);
      setFilteredProducts([...filteredProducts, response.data[0]]);
      setProduct({
        productname: '',
        productimage: '',
        rating: '',
        price: ''
      });
    } catch (error) {
      console.error('There was an error saving the product!', error);
      alert('Error saving the product. Please check the console for details.');
    }
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:8080/api/products/${productId}`);
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
      } catch (error) {
        console.error('There was an error deleting the product!', error);
        alert('Error deleting the product. Please check the console for details.');
      }
    }
  };

  return (
   <>      <Navbar />
   <Sidebar/>
    <div className="flex">
      {/* Sticky Sidebar for Filtering */}
      <aside className="w-1/4 bg-gray-100 p-6 sticky top-0 h-screen overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Filter Products</h3>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Category</h4>
          <ul>
            <li>
              <button
                onClick={() => setFilter('Frame')}
                className="w-full text-left py-2 px-4 hover:bg-gray-200"
              >
                Frame
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter('Watch')}
                className="w-full text-left py-2 px-4 hover:bg-gray-200"
              >
                Watch
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter('T-shirt')}
                className="w-full text-left py-2 px-4 hover:bg-gray-200"
              >
                T-shirt
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter('Bracelets')}
                className="w-full text-left py-2 px-4 hover:bg-gray-200"
              >
                Bracelets
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter('')}
                className="w-full text-left py-2 px-4 hover:bg-gray-200"
              >
                All
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
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

        <h2 className="text-2xl font-bold mb-4">Existing Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow-lg">
              <img src={product.productimage} alt={product.productname} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-bold text-gray-800">{product.productname}</h2>
              <p className="text-gray-700 mb-4">Price: ₹{product.price}</p>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>

  );
};

export default Admina;
