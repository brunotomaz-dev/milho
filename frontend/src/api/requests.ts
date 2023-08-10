import axios from 'axios';

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

export const requestLogin = async (email: string, password: string) => {
  const response = await api.post("/auth", { email, password });
  return response.data;
}