import { API } from "../../../configs";
import { setUser } from "../../../redux/slice/AuthSlice";
import {
  changeAvatarErorr,
  changeAvatarPending,
  changeAvatarSuccess,
} from "../../../redux/slice/ChangeAvatarSlice";
import {
  changeProfileErorr,
  changeProfilePending,
  changeProfileSuccess,
} from "../../../redux/slice/ChangeProfileSlice";
import {
  ResendVerifyEmailErorr,
  ResendVerifyEmailPending,
  ResendVerifyEmailSuccess,
} from "../../../redux/slice/ResendVerifyEmailSlice";
import { AppDispatch } from "../../../redux/store";
import { getErr422 } from "../../../utils/helper";

export const ChangeProfileServices = {
  profile: (dispatch: AppDispatch, params: any, onSuccess: () => void) => {
    dispatch(changeProfilePending());
    API.changeProfile(params)
      .then((ress) => {
        dispatch(setUser(ress.data.data));
        dispatch(changeProfileSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(changeProfileErorr(getErr422(err)));
      });
  },
  avatar: (dispatch: AppDispatch, params: any, onSuccess: () => void) => {
    dispatch(changeAvatarPending());
    const formDt = new FormData();
    formDt.append("file", params[0]);
    API.changeAvatar(formDt)
      .then((ress) => {
        dispatch(setUser(ress.data.data));
        dispatch(changeAvatarSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(changeAvatarErorr(getErr422(err)));
      });
  },
  resendVerifyEmail: (dispatch: AppDispatch, onSuccess: () => void) => {
    dispatch(ResendVerifyEmailPending());
    API.resendVerifyEmail()
      .then(() => {
        dispatch(ResendVerifyEmailSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(ResendVerifyEmailErorr(getErr422(err)));
      });
  },
};
