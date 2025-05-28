// src/utils/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://monsef74.pythonanywhere.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
