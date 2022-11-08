import axios from 'axios';

const API = axios.create({ baseURL: 'https://appbuddy.onrender.com/', withCredentials: true });



export const getUser = () => API.get('/user');
