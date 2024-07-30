import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex-shrink-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Admin Dashboard</h1>
        <nav>
          <ul className="list-none p-0">
            <li className="border-b border-gray-700">
              <Link
                to="/add-product"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Add Product
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link
                to="/remove-product"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Remove Product
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link
                to="/product-list"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                Product List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
