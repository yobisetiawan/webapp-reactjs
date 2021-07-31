import { http } from "../utils/http";

import { STORAGE } from ".";

const token = () => {
  return `Bearer ${localStorage.getItem(STORAGE.token)}`;
};

const api = {
  login: (data: any) => http.post("/auth/login", data),
  logout: () => http.get("/auth/logout"),
  forgotPasword: (data: any) => http.post("/auth/forgot-password", data),
  getCurrentUSer: () =>
    http.get("/current-user", { headers: { Authorization: token() } }),
};

export default api;
