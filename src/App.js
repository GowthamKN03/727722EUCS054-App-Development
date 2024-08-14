<<<<<<< HEAD

// // src/App.js
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './home/Home';
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import Fav from './home/Fav';
// import Cart from './home/Cart';
// import Product1 from './home/Product1';
// import Review from './home/Review';
// import { Product1Context } from './context/Product1_context';
// import Custom from './Payment/Custom';
// import Pay from './Payment/Pay';
// import Receipt from './Payment/Receipt';
// import AddProduct from './admin/AddProduct';
// import RemoveProduct from './admin/RemoveProduct';
// import ProductList from './admin/ProductList';
// import AdminLogin from './Authentication/AdminLogin';
// import PersonalizeGift from './home/PersonalizeGift';
// import AdminDashboard from './admin1/AdminDashboard';
// import SellerPage from './Authentication/SellerLogin';
// import Seller from './Authentication/Seller';

// function App() {
//   return (
//     <div className="App">
//       <Product1Context>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/fav" element={<Fav />} />
//             <Route path="/frames" element={<Product1 />} />
//             <Route path="/custom" element={<Custom/>} />
//             <Route path="/pay" element={<Pay />} />
//             <Route path="/receipt" element={<Receipt/>} />
//             <Route path="/product/:id/review" element={<Review />} /> {/* Add review page route */}
//             <Route path="/buy" element={<Custom/>}></Route>
            
//             <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/remove-product" element={<RemoveProduct />} />
//           <Route path="/product-list" element={<ProductList />} />
//           <Route path="/personalize" element={<PersonalizeGift />} />

//           <Route path='/admin-login' element={<AdminLogin/>}/>
//           <Route path='/admin' element={<AdminDashboard/>} />
//           <Route path='/seller' element={<Seller/>} />
//           <Route path='/sellerlogin'  element={<SellerPage/>}/>
//           </Routes>
//         </Router>


// import './App.css';
// import { useEffect, useState } from 'react';
// import "aos/dist/aos.css";
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './home/Home';
// import Navbar from './home/Navbar';
// import Fav from './home/Fav';
// import { Product1Context } from './context/Product1_context';
// import Product1 from './home/Product1';
// import Cart from './home/Cart';
// import AddProduct from './admin/AddProduct';
// import RemoveProduct from './admin/RemoveProduct';
// import ProductList from './admin/ProductList';
// import Dashboard from './admin/Dashboard';


// function App() {
//   const [query, setQuery] = useState("");

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <div className="App">
//        <Product1Context>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path='/home' element={<Home/>}/>
//           <Route path="/login" element={<Login/>} />
//           <Route path="/register" element={<Register />} />
//           <Route path='/cart' element={<Cart/>}/>
//           <Route path='/fav' element={<Fav/>}/>
//           <Route path='/frames' element={<Product1/>}/>
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/remove-product" element={<RemoveProduct />} />
//           <Route path="/product-list" element={<ProductList />} />
          
//         </Routes>
//       </Router>
//       </Product1Context>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import { useEffect, useState } from 'react';
// import "aos/dist/aos.css";
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './home/Home';
// import Navbar from './home/Navbar';
// import Fav from './home/Fav';
// import Cart from './home/Cart';
// import { Product1Context } from './context/Product1_context';
// import Product1 from './home/Product1';
// import { initGoogleAuth, auth2 } from './Authentication/GoogleAuth'; // Import Google Auth functions

// function App() {
//   const [query, setQuery] = useState("");
//   const [isAuthInitialized, setIsAuthInitialized] = useState(false);

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   useEffect(() => {
//     initGoogleAuth()
//       .then(() => {
//         setIsAuthInitialized(true);
//         console.log('Google Auth initialized successfully.');
//       })
//       .catch((error) => {
//         console.error('Error initializing Google Auth:', error);
//       });
//   }, []);

//   const checkAuth = () => {
//     if (auth2 && auth2.isSignedIn.get()) {
//       const profile = auth2.currentUser.get().getBasicProfile();
//       console.log('ID: ' + profile.getId());
//       console.log('Full Name: ' + profile.getName());
//       console.log('Given Name: ' + profile.getGivenName());
//       console.log('Family Name: ' + profile.getFamilyName());
//       console.log('Image URL: ' + profile.getImageUrl());
//       console.log('Email: ' + profile.getEmail());
//     } else {
//       console.log('User is not signed in.');
//     }
//   };

//   return (
//     <div className="App">
//       <Product1Context>
//         <Router>
//           {/* Add Navbar here if needed */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path='/home' element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path='/cart' element={<Cart />} />
//             <Route path='/fav' element={<Fav />} />
//             <Route path='/frames' element={<Product1 />} />
//           </Routes>
//         </Router>
//       </Product1Context>
//     </div>
//   );
// }

// export default App;
=======
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Fav from './home/Fav';
import Cart from './home/Cart';
import Product1 from './home/Product1';
import Review from './home/Review';
import { Product1Context } from './context/Product1_context';
import Custom from './Payment/Custom';
import Pay from './Payment/Pay';
import Receipt from './Payment/Receipt';
import AddProduct from './admin/AddProduct';
import RemoveProduct from './admin/RemoveProduct';
import ProductList from './admin/ProductList';
<<<<<<< HEAD
import AdminLogin from './Authentication/AdminLogin';
import PersonalizeGift from './home/PersonalizeGift';
import AdminDashboard from './admin1/AdminDashboard';
import SellerPage from './Authentication/SellerLogin';
import Seller from './Authentication/Seller';
import ProfilePage from './home/Profile';
import CheckoutPage from './Payment/CheckoutPage';
import Admina from './admin/Admina';
import AdminSettings from './admin1/Adminsetting';
import Usermanagement from './admin1/Usermanagement';
=======
import Dashboard from './admin/Dashboard';
import AdminLogin from './Authentication/AdminLogin';
import PersonalizeGift from './home/PersonalizeGift';
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

function App() {
  return (
    <div className="App">
      <Product1Context>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/frames" element={<Product1 />} />
            <Route path="/custom" element={<Custom/>} />
<<<<<<< HEAD
            <Route path="/checkout" element={<CheckoutPage />} />
=======
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
            <Route path="/pay" element={<Pay />} />
            <Route path="/receipt" element={<Receipt/>} />
            <Route path="/product/:id/review" element={<Review />} /> {/* Add review page route */}
            <Route path="/buy" element={<Custom/>}></Route>
<<<<<<< HEAD
            
=======
            <Route path='/admin' element={<Dashboard/>}/>
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
            <Route path="/add-product" element={<AddProduct />} />
          <Route path="/remove-product" element={<RemoveProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/personalize" element={<PersonalizeGift />} />

          <Route path='/admin-login' element={<AdminLogin/>}/>
<<<<<<< HEAD
          <Route path='/admin' element={<AdminDashboard/>} />
          <Route path='/seller' element={<Seller/>} />
          <Route path='/sellerlogin'  element={<SellerPage/>}/>
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/admina'  element={<Admina/>}/>
          <Route path='/settings'  element={<AdminSettings/>}/>
          <Route path='/Usermanage'  element={<Usermanagement/>}/>
          </Routes>
        </Router>
        </Product1Context>
        </div>
  )
}

 export default App;
=======
          </Routes>
        </Router>
      </Product1Context>
    </div>
  );
}

export default App;
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

