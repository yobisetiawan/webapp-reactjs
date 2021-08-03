import { API } from "../../configs";
import { logout } from "../../redux/slice/AuthSlice";
import { AppDispatch } from "../../redux/store";

export const LogoutService = {
  run: (dispatch: AppDispatch, onLogout: () => void) => {
    API.logout();
    dispatch(logout());
    onLogout();
  },
};
