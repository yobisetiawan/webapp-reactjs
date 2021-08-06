import { API } from "../../../configs";
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
import { AppDispatch } from "../../../redux/store";
import { getErr422 } from "../../../utils/helper";

export const ChangeProfileServices = {
  profile: (dispatch: AppDispatch, params: any, onSuccess: () => void) => {
    dispatch(changeProfilePending());
    API.changeProfile(params)
      .then(() => {
        dispatch(changeProfileSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(changeProfileErorr(getErr422(err)));
      });
  },
  avatar: (dispatch: AppDispatch, params: any, onSuccess: () => void) => {
    dispatch(changeAvatarPending());
    API.changeAvatar(params)
      .then(() => {
        dispatch(changeAvatarSuccess());
        onSuccess();
      })
      .catch((err) => {
        dispatch(changeAvatarErorr(getErr422(err)));
      });
  },
};
