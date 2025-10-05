import axios from "axios";
import networkConfig from "../config/network";

export const countriesInstance = axios.create({
  baseURL: networkConfig.COUNTRY_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
