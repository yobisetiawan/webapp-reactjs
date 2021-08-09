import { API } from "../../../configs";
import {
  resetErorr,
  resetPending,
  resetSuccess,
} from "../../../redux/slice/ResetPasswordSlice";
import { AppDispatch } from "../../../redux/store";
import { getErr422 } from "../../../utils/helper";

export const ResetPasswordServices = {
  run: (
    dispatch: AppDispatch,
    token: string,
    params: any,
    onSuccess: () => void
  ) => {
    dispatch(resetPending());
    API.resetPasword(token, params)
      .then(() => {
        dispatch(resetSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(resetErorr(getErr422(err)));
      });
  },
};
