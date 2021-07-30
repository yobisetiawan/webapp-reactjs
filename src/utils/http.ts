import axios from "axios";

const API_URL = "http://localhost:3000";

export const http = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});
