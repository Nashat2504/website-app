import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Buy from './pages/Buy'; // Adjust the path based on your file structure
import Aimodel from './pages/Aimodel';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/banner_mens.png';
import women_banner from './component/Assets/banner_women.png';
import kid_banner from './component/Assets/banner_kids.png';
import ShopContext from './Context/ShopContext'; // تأكد من صحة المسار
import Profail from './pages/Profail';

const App = () => {
  return (
    <ShopContext>
      <div className="App">
        <Navbar />
        <Product />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path="/AI" element={<Aimodel category="ai" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/:productId" element={<Product />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path='/profail' element={<Profail/>}/>
       </Routes>
        <Footer />
      </div>
    </ShopContext>
  );
};

export default App;