import { http } from "../utils/http";

import { STORAGE } from ".";

export const BearerToken = () => {
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
  changePassword: (data: any) =>
    http.put("/current-user/change-password", data, {
      headers: { Authorization: BearerToken() },
    }),
  changeProfile: (data: any) =>
    http.put("/current-user/change-profile", data, {
      headers: { Authorization: BearerToken() },
    }),
  changeAvatar: (data: any) =>
    http.put("/current-user/change-avatar?_method=PUT", data, {
      headers: { Authorization: BearerToken() },
    }),
};

export default api;
