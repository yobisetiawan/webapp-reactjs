import { API } from "../../../configs";
import { setUserToken } from "../../../redux/slice/AuthSlice";
import {
  loginErorr,
  loginPending,
  loginSuccess,
} from "../../../redux/slice/LoginSlice";
import { AppDispatch } from "../../../redux/store";
import { getErr422 } from "../../../utils/helper";

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
        dispatch(loginErorr(getErr422(err)));
      });
  },
};
