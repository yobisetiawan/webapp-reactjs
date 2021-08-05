import { http } from "../utils/http";

import { STORAGE } from ".";

const BearerToken = () => {
  return `Bearer ${localStorage.getItem(STORAGE.token)}`;
};

const api = {
  login: (data: any) => http.post("/auth/login", data),
  register: (data: any) => http.post("/auth/register", data),
  logout: () => http.get("/auth/logout"),
  forgotPasword: (data: any) => http.post("/auth/forgot-password", data),
  resetPasword: (token: string, data: any) =>
    http.post("/auth/reset-password/" + token, data),
  getCurrentUSer: () =>
    http.get("/current-user", { headers: { Authorization: BearerToken() } }),
};

export default api;
