import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FRAME } from "../components/Frame";
import Frame2 from "./Frames";
import Navbar from './Navbar';

const Product1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(FRAME);
  const productRefs = useRef([]);
  const location = useLocation();

  const scrollToProduct = (id) => {
    const index = FRAME.findIndex(product => product.id === id);
    if (index !== -1 && productRefs.current[index]) {
      productRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const scrollToId = parseInt(query.get('scrollTo'), 10);
    if (scrollToId) {
      scrollToProduct(scrollToId);
    }
  }, [location.search]);

  const handleFilter = () => {
    const result = FRAME.filter(product =>
      product.productname && product.productname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(result);
  };

  return (
    <div className='shop'>
      <Navbar />
      <div className='search-bar text-center mb-8'>
        <div className='p-10 mt-10 flex items-center justify-center'>
          <input
            type="text"
            placeholder="Filter by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='p-2 border border-gray-400 rounded-l-md w-3/4 md:w-1/2 lg:w-1/3'
          />
          <button
            onClick={handleFilter}
            className='bg-blue-500 text-white p-2 rounded-r-md border border-gray-400 border-l-0 hover:bg-blue-600 transition duration-150 ease-in-out'
          >
            Filter
          </button>
        </div>
      </div>
      <div className='product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mx-auto'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div ref={el => productRefs.current[index] = el} key={product.id}>
              <Frame2 data={product} />
            </div>
          ))
        ) : (
          <div className='col-span-full text-center text-gray-500'>
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Product1;
