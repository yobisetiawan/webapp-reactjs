import { API } from "../../../configs";
import { setUserToken } from "../../../redux/slice/AuthSlice";
import {
  loginErorr,
  loginPending,
  loginSuccess,
} from "../../../redux/slice/LoginSlice";
import { AppDispatch } from "../../../redux/store";

export const LoginServices = {
  loginProcess: (dispatch: AppDispatch, params: any, onSuccess: () => void) => {
    dispatch(loginPending());
    API.login(params)
      .then((ress) => {
        dispatch(
          setUserToken({ user: ress.data.user, token: ress.data.token })
        );
        dispatch(loginSuccess());
        onSuccess();
      })
      .catch((err) => {
        if (err && err.response.status == 422) {
          dispatch(loginErorr(err.response.data.errors));
        }
      });
  },
};
