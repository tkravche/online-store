import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://www.citywheels.website/api/',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});
