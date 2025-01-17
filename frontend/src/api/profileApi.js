import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getProfile = (token) => API.get('/profile', { headers: { Authorization: token } });
export const updateProfile = (data, token) =>
  API.put('/profile', data, { headers: { Authorization: token } });
