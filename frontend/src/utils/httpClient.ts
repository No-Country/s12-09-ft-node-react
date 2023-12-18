// import axios from 'axios';
// import { config } from '@/config';

// export const httpClient = axios.create({
//   baseURL: config.api.base,
//   timeout: 5000,
//   headers: { 'Content-Type': 'application/json' },
// });

export { default as httpClient } from './httpFetch';
