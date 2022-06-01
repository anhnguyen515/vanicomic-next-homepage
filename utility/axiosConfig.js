import axios from "axios";
import jsCookie from "js-cookie";
import { DJANGO_BASE_URL } from "./constants";

const axiosClient = axios.create({
  baseURL: DJANGO_BASE_URL,
  xsrfCookieName: "csrftoken",
  withCredentials: false,
  xsrfHeaderName: "X-CSRFToken",
});

axiosClient.interceptors.request.use((config) => {
  if (jsCookie.get("access-token") !== undefined) {
    config.headers["Authorization"] = `Bearer ${jsCookie.get("access-token")}`;
  }
  return config;
});

// axiosClient.interceptors.response.use(
//   // (res) => res.data,
//   (err) => {
//     // if (err.response.status === 401) {
//     //   window.location.href = "/account/login";
//     // }
//     if (err.response) {
//       console.log(err.response);
//     }
//   }
// );

export default axiosClient;
