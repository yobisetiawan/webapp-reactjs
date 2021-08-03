import { decrement, increment } from "../../redux/slice/CounterSlice";
import { AppDispatch } from "../../redux/store";

export const DashboardService = {
  increment: (dispatch: AppDispatch) => {
    dispatch(increment());
  },
  decrement: (dispatch: AppDispatch) => {
    dispatch(decrement());
  },
};
