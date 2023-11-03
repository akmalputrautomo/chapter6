import axios from "axios";
import { CookieKeys, CookieStorage } from "./Cookies";
import { useSelector } from "react-redux";

// const Token = sessionStorage.getItem("token") ? localStorage.getItem("token") : undefined;

const http3 = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

http3.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`,
    // Authorization: `Bearer ${useSelector((state) => state.auth.token)}`,
  };
  return config;
});

// http3.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${Token ? Token : ""}`,
//   };
//   return config;
// });

export default http3;
