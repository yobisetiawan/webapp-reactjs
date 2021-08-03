import moment from "moment";

import { STORAGE } from "../../../configs";

export const LoginServices = {
  loginProcess: (onSuccess: () => void) => {
    localStorage.setItem(
      STORAGE.token,
      window.btoa(moment().format("YYYY-MM-DD"))
    );
    onSuccess();
  },
};
