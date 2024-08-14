// src/components/MainContent.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload, faCalendarCheck, faUsers, faDollarSign, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  return (
    <main className="p-6 h-screen bg-gray-900">
     
      {/* Info Boxes */}
      <ul className="box-info grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <li className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-blue-600 text-3xl mr-6" />
          <div className="text">
            <h3 className="text-2xl font-semibold">1020</h3>
            <p className="text-gray-500">New Orders</p>
          </div>
        </li>
        <li className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FontAwesomeIcon icon={faUsers} className="text-yellow-500 text-3xl mr-6" />
          <div className="text">
            <h3 className="text-2xl font-semibold">2834</h3>
            <p className="text-gray-500">Visitors</p>
          </div>
        </li>
        <li className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FontAwesomeIcon icon={faDollarSign} className="text-orange-500 text-3xl mr-6" />
          <div className="text">
            <h3 className="text-2xl font-semibold">₹2543</h3>
            <p className="text-gray-500">Total Sales</p>
          </div>
        </li>
      </ul>

      {/* Table Data */}
      <div className="table-data grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="order bg-white p-6 rounded-lg shadow-md">
          <div className="head flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <a href="#" className="text-blue-600">See More</a>
          </div>
          <table className="w-full text-gray-600">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Order ID</th>
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows */}
              <tr>
                <td className="py-2">#12345</td>
                <td className="py-2">John Doe</td>
                <td className="py-2">Shipped</td>
                <td className="py-2">$100.00</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        
        {/* Recent Transactions */}
        <div className="transaction bg-white p-6 rounded-lg shadow-md">
          <div className="head flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <a href="#" className="text-blue-600">See More</a>
          </div>
          <table className="w-full text-gray-600">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Transaction ID</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows */}
              <tr>
                <td className="py-2">#TX12345</td>
                <td className="py-2">$250.00</td>
                <td className="py-2">2024-08-06</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
