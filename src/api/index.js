import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/', withCredentials: true }); //https://appbuddy.onrender.com/



export const getUser = () => API.get('/user');

export const logout = () => API.post('/logout');
