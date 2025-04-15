// lib/axios.js
import axios from 'axios';

const baseURL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5001/api'
    : 'https://chat-app-mern.railway.internal/api';

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
