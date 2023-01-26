import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://openai-images-7fyq.onrender.com/api',
});
