import { API } from "../../configs";
import {
  UserListErorr,
  UserListPending,
  UserListSetSelected,
  UserListSuccess,
} from "../../redux/slice/UserListSlice";
import { AppDispatch } from "../../redux/store";
import { getErr422 } from "../../utils/helper";

export const UserListServices = {
  getList: (dispatch: AppDispatch) => {
    dispatch(UserListPending());
    API.getUserList()
      .then((ress) => {
        window.console.log(ress.data);
        dispatch(UserListSuccess(ress.data.data));
      })
      .catch((err) => {
        dispatch(UserListErorr(getErr422(err)));
      });
  },
  setSelected: (dispatch: AppDispatch, rec: any) => {
    dispatch(UserListSetSelected(rec));
  },
};
