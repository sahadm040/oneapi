import axios from "axios";
const API_URL_DEV = "https://the-one-api.dev/v2/";
export const axiosApi = axios.create({
  baseURL: API_URL_DEV,
});
axiosApi.interceptors.request.use(
  function (config) {
    const token = "PqQoeGdsl5kBKHPQqcIK";
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return error;
  }
);
