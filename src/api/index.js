import axios from 'axios';

export const API = axios.create({ baseURL: 'https://appbuddy.tk/', withCredentials: true }); // 'http://localhost:8000/'



export const getUser = () => API.get('/user');

export const logout = () => API.post('/logout');

export const createSheet = () => API.post('/sheet/create');

export const getSheetId = () => API.get('/sheet/getSheetId');
