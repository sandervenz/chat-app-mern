import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-app-mern-tawny.vercel.app/api',
    withCredentials: true,
});