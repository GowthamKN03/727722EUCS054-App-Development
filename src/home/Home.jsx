import Banner from '../components/Banner';
import Intro from '../components/Intro';
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Products from '../components/Products';
import Testimonals from '../components/Testimonals';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App bg-white dark:bg-white dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Banner />
      <Intro />
      <Products />
      <AppStore />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default Home;
