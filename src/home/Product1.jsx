// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from './Navbar';
// import Frame from "./Frames";
// import { ShopContext } from '../context/Product1_context';

// const Product1 = () => {
//   const { products } = useContext(ShopContext);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 10000]);
//   const [category, setCategory] = useState('All');
//   const [rating, setRating] = useState(0);
//   const productRefs = useRef([]);
//   const location = useLocation();

//   useEffect(() => {
//     setFilteredProducts(products);
//   }, [products]);

//   const scrollToProduct = (id) => {
//     const index = products.findIndex(product => product.id === id);
//     if (index !== -1 && productRefs.current[index]) {
//       productRefs.current[index].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const scrollToId = parseInt(query.get('scrollTo'), 10);
//     if (scrollToId) {
//       scrollToProduct(scrollToId);
//     }
//   }, [location.search, products]);

//   useEffect(() => {
//     const result = products.filter(product =>
//       product.productname && product.productname.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       product.price >= priceRange[0] && product.price <= priceRange[1] &&
//       (category === 'All' || product.productname.toLowerCase().includes(category.toLowerCase())) &&
//       product.rating >= rating
//     );
//     setFilteredProducts(result);
//   }, [searchQuery, priceRange, category, rating, products]);

//   return (
//     <div className='shop'>
//       <Navbar />
//       <div className='flex mt-16'>
//         {/* Filters Section */}
//         <div className='filters sticky top-16 w-1/4 h-screen overflow-y-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200'>
//           <h2 className='text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2'>Filters</h2>

//           {/* Search by Name */}
//           <div className='search-bar mb-6'>
//             <label className='block text-sm font-semibold text-gray-700 mb-2'>Filter by Name</label>
//             <input
//               type="text"
//               placeholder="Enter product name"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className='p-3 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
//             />
//           </div>

//           {/* Price Filter */}
//           <div className='price-filter mb-6'>
//             <label className='block text-sm font-semibold text-gray-700 mb-2'>Filter by Price</label>
//             <div className='flex space-x-2'>
//               <input
//                 type="number"
//                 placeholder="Min"
//                 value={priceRange[0]}
//                 onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
//                 className='p-3 border border-gray-300 rounded-l-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
//               />
//               <input
//                 type="number"
//                 placeholder="Max"
//                 value={priceRange[1]}
//                 onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
//                 className='p-3 border border-gray-300 rounded-r-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
//               />
//             </div>
//           </div>

//           {/* Category Filter */}
//           <div className='category-filter mb-6'>
//             <label className='block text-sm font-semibold text-gray-700 mb-2'>Category</label>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className='p-3 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
//             >
//               <option value="All">All</option>
//               <option value="Frame">Frames</option>
//               <option value="Watch">Watches</option>
//               <option value="Bracelet">Bracelets</option>
//               <option value="Tshirt">Tshirts</option>
//             </select>
//           </div>

//           {/* Rating Filter */}
//           <div className='rating-filter mb-6'>
//             <label className='block text-sm font-semibold text-gray-700 mb-2'>Rating</label>
//             <input
//               type="number"
//               min="0"
//               max="5"
//               step="0.1"
//               placeholder="Min Rating"
//               value={rating}
//               onChange={(e) => setRating(Number(e.target.value))}
//               className='p-3 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
//             />
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className='product-grid w-3/4 p-6'>
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product, index) => (
//                 <div ref={el => productRefs.current[index] = el} key={product.id}>
//                   <Frame data={product} />
//                 </div>
//               ))
//             ) : (
//               <div className='col-span-full text-center text-gray-500'>
//                 No products found.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product1;

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Frame from "./Frames";
import { ShopContext } from '../context/Product1_context';
import Lottie from 'lottie-react';
import animationData from '../animations/gift1.json'; // Import your Lottie animation file

const Product1 = () => {
  const { products } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [category, setCategory] = useState('All');
  const [rating, setRating] = useState(0);
  const productRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const scrollToProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
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
  }, [location.search, products]);

  useEffect(() => {
    const result = products.filter(product =>
      product.productname && product.productname.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      (category === 'All' || product.productname.toLowerCase().includes(category.toLowerCase())) &&
      product.rating >= rating
    );
    setFilteredProducts(result);
  }, [searchQuery, priceRange, category, rating, products]);

  return (
    <div className='shop'>
      <Navbar />
      <div className='flex mt-12'>
        {/* Filters Section */}
        <div 
          className='filters sticky top-16 w-1/4 h-screen overflow-y-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200 relative'
          style={{
            backgroundImage: 'url(https://images.alphacoders.com/885/885150.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Filter Content */}
          <div className='p-6 bg-white bg-opacity-80 rounded-lg'> {/* Optional: Add a background with opacity for better readability */}
            <h2 className='text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2'>Filters</h2>

            {/* Search by Name */}
            <div className='search-bar mb-6'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Filter by Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='p-3 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
              />
            </div>

            {/* Price Filter */}
            <div className='price-filter mb-6'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Filter by Price</label>
              <div className='flex space-x-2'>
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className='p-3 border border-gray-300 rounded-l-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className='p-3 border border-gray-300 rounded-r-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className='category-filter mb-6'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='p-3 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
              >
                <option value="All">All</option>
                <option value="Frame">Frames</option>
                <option value="Watch">Watches</option>
                <option value="Bracelet">Bracelets</option>
                <option value="Tshirt">Tshirts</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div className='rating-filter mb-6'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                placeholder="Min Rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className='p-3 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='w-3/4 p-6 mt-10'>
          {/* Lottie Animation */}
          <div className='bg-slate-900 w-full flex justify-center mb-6'>
            <div className='w-64 h-64'>
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>

          {/* Product Grid */}
          <div className='product-grid'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div ref={el => productRefs.current[index] = el} key={product.id}>
                    <Frame data={product} />
                  </div>
                ))
              ) : (
                <div className='col-span-full text-center text-gray-500'>
                  No products found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
