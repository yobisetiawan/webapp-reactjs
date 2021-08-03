import axios from "axios";

import ENV from "../configs/env";

export const http = axios.create({
  baseURL: ENV.host,
  timeout: 30000,
});
