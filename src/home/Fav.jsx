

import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
import { FRAME } from '../components/Frame';
import Navbar from './Navbar';

const Fav = () => {
  const { favItems, toggleFavorite } = useContext(ShopContext);

  const handleRemoveFromFavorites = (itemId) => {
    toggleFavorite(itemId); 
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favItems.length > 0 ? (
            favItems.map((itemId) => {
              const item = FRAME.find((product) => product.id === itemId);
              if (!item) return null; 
              return (
                <div key={item.id} className="bg-white rounded-lg shadow-md transition-transform transform hover:translate-y-1 hover:shadow-lg flex flex-col justify-between items-center mx-2 my-4 overflow-hidden max-w-xs w-full">
                  <img src={item.productimage} alt={item.productname} className="w-full h-auto rounded-t-lg object-cover" />
                  <div className="p-2 text-left text-gray-700 text-sm flex-grow w-full">
                    <p className="font-bold">{item.productname}</p>
                    <p>₹{item.price}</p>
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() => handleRemoveFromFavorites(item.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-full"
                      >
                        Remove from Favorites
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No favorite items yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;
