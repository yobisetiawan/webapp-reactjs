import { API } from "../../configs";
import { logout, setUser } from "../../redux/slice/AuthSlice";
import { AppDispatch } from "../../redux/store";

export const GetCurrentUserService = {
  run: (dispatch: AppDispatch) => {
    API.getCurrentUSer()
      .then((ress) => {
        dispatch(setUser(ress.data));
      })
      .catch(() => {
        dispatch(logout());
      });
  },
};
