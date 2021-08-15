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

export function hasAuthenticated() {
  const token = localStorage.getItem("jwt");
  console.log(token);
  if (token) {
    return true;
  }
  return false;
}

//  export function login(credentials) {
//     return axios
//       .post(`${process.env.REACT_APP_API_URL}api/users/login`, credentials)
//        .then(response => response)
//     //  .then(token => {
// //             addItem('miniblogToken', token);

// //             return true;
// //         });
//  }

//  export function logout() {
//    removeItem('miniblogToken');
//  }

// function tokenIsValid(token) {
//     const { exp: expiration } = jwtDecode(token);

//     if (expiration * 1000 > new Date().getTime()) {
//         return true;
//     }

//     return false;
// }
