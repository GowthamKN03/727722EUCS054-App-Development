import React, { useState } from 'react';
import AddProduct from './AddProduct';
import RemoveProduct from './RemoveProduct';
import ProductList from './ProductList';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <AddProduct addProduct={addProduct} />
        <RemoveProduct removeProduct={removeProduct} />
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default Dashboard;
