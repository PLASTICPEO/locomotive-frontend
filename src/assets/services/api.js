import axios from 'axios';
import { AUTH_TOKEN } from './constants/constants';

const authToken = localStorage.getItem(AUTH_TOKEN);

const headers = {};

if (authToken) {
  headers.Authorization = `Bearer ${authToken}`;
}

const axiosParams = {
  baseURL: import.meta.env.BASE_URL,
  headers,
};

const axiosInstance = axios.create(axiosParams);

export const setToken = (tokenType, token) => {
  localStorage.setItem(AUTH_TOKEN, token);
  axiosInstance.defaults.headers.Authorization = `${tokenType} ${token}`;
};

const api = (http) => ({
  get: (url) => http.get(url),
  post: (url, body, config) => http.post(url, body, config),
});

export default api(axiosInstance);
