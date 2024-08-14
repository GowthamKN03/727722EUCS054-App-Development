<<<<<<< HEAD
=======

>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Products from '../components/Products';
import Testimonals from '../components/Testimonals';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer';

<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
=======

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const Home=()=> {
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

<<<<<<< HEAD
  return (
    <div className="App bg-white dark:bg-white dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Banner />
      <Intro />
      <Products />
      <AppStore />
      <Testimonals />
      <Footer />
=======


  return (
    <div className="App bg-white bg-amber-50 dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
    <Navbar/>
    <Banner/>
    <Intro />
    <Products/>
    <AppStore/>
    <Testimonals/>
    <Footer/> 
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
    </div>
  );
}

export default Home;
