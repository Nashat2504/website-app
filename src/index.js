// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index"
import ShopContextProvider from './Context/ShopContext';

ReactDOM.render(
  <BrowserRouter>
    < ShopContextProvider>
     < App />
      </ShopContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);