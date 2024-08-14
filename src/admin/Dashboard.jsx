import React, { useState } from 'react';
import AddProduct from './AddProduct';
import RemoveProduct from './RemoveProduct';
import ProductList from './ProductList';
import Sidebar from './Sidebar';

const Dashboard = () => {
<<<<<<< HEAD
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
=======
  const [products, setProducts] = useState([
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <AddProduct addProduct={addProduct} />
<<<<<<< HEAD
        <RemoveProduct removeProduct={removeProduct} />
=======
        <RemoveProduct products={products} removeProduct={removeProduct} />
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default Dashboard;
