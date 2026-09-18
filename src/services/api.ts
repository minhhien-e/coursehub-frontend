import axios from 'axios';
import { storage } from '../utils/storage';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = storage.getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 and refresh token logic here in the future
    if (error.response?.status === 401) {
      // storage.clearAll();
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
