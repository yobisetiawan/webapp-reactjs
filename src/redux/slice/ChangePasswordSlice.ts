import { createSlice } from "@reduxjs/toolkit";

export interface ChangePasswordState {
  loading: boolean;
  error: any;
}

const initialState: ChangePasswordState = {
  loading: false,
  error: {},
};

export const Slice = createSlice({
  name: "change_password",
  initialState,
  reducers: {
    changePassPending: (state) => {
      state.loading = true;
    },
    changePassSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    changePassErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePassPending, changePassSuccess, changePassErorr } =
  Slice.actions;

export default Slice.reducer;
