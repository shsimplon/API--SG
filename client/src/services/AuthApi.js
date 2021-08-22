/* eslint-disable no-undef */
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }

  return config;
});

export default api;

// proteger la route : ajouter recette

export function hasAuthenticated() {
  const token = localStorage.getItem("jwt");
  console.log(token);
  if (token) {
    return true;
  }
  return false;
}
