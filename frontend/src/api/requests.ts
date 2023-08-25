import axios from 'axios';

type LoginBody = {
  email: string;
  password: string;
  name?: string;
};

const HOST = import.meta.env.VITE_HOST;
const PROTOCOL = import.meta.env.VITE_PROTOCOL;

const API_URL = HOST || "localhost:3001";
const API_PROTOCOL = PROTOCOL || "http";

const api = axios.create({
  baseURL: `${API_PROTOCOL}://${API_URL}`,
});

export const setToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = token;
};

export const requestLogin = async (endpoint: string, body: LoginBody) => {
  const response = await api.post(endpoint, body);
  return response.data;
}

export const requestData = async (endpoint: string, body?: object) => {
  const response = await api.get(endpoint, body);
  return response.data;
}

export const sendData = async (endpoint: string, body: object) => {
  const response = await api.post(endpoint, body);
  return response.data;
}