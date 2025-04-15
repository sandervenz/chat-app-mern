// lib/axios.js
import axios from 'axios';

const baseURL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5001/api'
    : 'https://chat-app-mern-production-f89a.up.railway.app/api';

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
