import { http } from "../utils/http";

const api = {
  login: (data: any) => http.post("/auth/login", data),
  logout: () => http.get("/auth/login"),
  forgotPasword: (data: any) => http.post("/auth/forgot-password", data),
  getCurrentUSer: () => http.post("/auth/current-user"),
};

export default api;
