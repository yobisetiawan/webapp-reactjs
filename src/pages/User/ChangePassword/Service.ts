import { API } from "../../../configs";
import {
  changePassErorr,
  changePassPending,
  changePassSuccess,
} from "../../../redux/slice/ChangePasswordSlice";
import { AppDispatch } from "../../../redux/store";
import { getErr422 } from "../../../utils/helper";

export const ChangePasswordServices = {
  run: (dispatch: AppDispatch, params: any, onSuccess: () => void) => {
    dispatch(changePassPending());
    API.changePassword(params)
      .then(() => {
        dispatch(changePassSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(changePassErorr(getErr422(err)));
      });
  },
};
