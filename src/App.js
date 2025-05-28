import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Buy from './pages/Buy';
import Aimodel from './pages/Aimodel';
import Profail from './pages/Profail';
import Payment from './pages/Payment';

import Footer from './component/Footer/Footer';

import men_banner from './component/Assets/banner_mens.png';
import women_banner from './component/Assets/banner_women.png';
import kid_banner from './component/Assets/banner_kids.png';

import ShopContext from './Context/ShopContext';
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <ShopContext>

        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
            <Route path="/AI" element={<Aimodel category="ai" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/profail" element={<Profail />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Toaster />

          <Footer />
        </div>
      </ShopContext>
    </AuthProvider>
  );
};

export default App;
