import { API } from "../../../configs";
import { setUserToken } from "../../../redux/slice/AuthSlice";
import {
  registerErorr,
  registerPending,
  registerSuccess,
} from "../../../redux/slice/RegisterSlice";
import { AppDispatch } from "../../../redux/store";
import { getErr422 } from "../../../utils/helper";

export const RegisterServices = {
  registerProcess: (
    dispatch: AppDispatch,
    params: any,
    onSuccess: () => void
  ) => {
    dispatch(registerPending());
    API.register(params)
      .then((ress) => {
        dispatch(
          setUserToken({ user: ress.data.user, token: ress.data.token })
        );
        dispatch(registerSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(registerErorr(getErr422(err)));
      });
  },
};
