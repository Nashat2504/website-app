import React from 'react';
import { createRoot } from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import "./index"
import ShopContextProvider from './Context/ShopContext';

const history = createBrowserHistory({ window });

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HistoryRouter history={history}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HistoryRouter>
);
