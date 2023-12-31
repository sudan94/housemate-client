import axios from "axios";

const BASE_URL_PROD = import.meta.env.VITE_PROD_BASE_URL;
const BASE_URL_DEV = import.meta.env.VITE_DEV_BASE_URL;
const ENV = import.meta.env.NODE_ENV;
const BASE_URL = ENV === "production" ? BASE_URL_PROD : BASE_URL_DEV;
console.log(BASE_URL)

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});



export default request;