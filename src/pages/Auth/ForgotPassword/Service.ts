import { API } from "../../../configs";
import {
  forgotErorr,
  forgotPending,
  forgotSuccess,
} from "../../../redux/slice/ForgotPasswordSlice";
import { AppDispatch } from "../../../redux/store";
import { getErr422 } from "../../../utils/helper";

export const ForogtPasswordServices = {
  run: (dispatch: AppDispatch, params: any, onSuccess: () => void) => {
    dispatch(forgotPending());
    API.forgotPasword(params)
      .then(() => {
        dispatch(forgotSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(forgotErorr(getErr422(err)));
      });
  },
};
