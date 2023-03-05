import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://open-ai-images-api.vercel.app/api',
});
