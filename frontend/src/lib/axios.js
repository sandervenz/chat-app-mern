import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-app-mern-beta-three.vercel.app/api',
    withCredentials: true,
});