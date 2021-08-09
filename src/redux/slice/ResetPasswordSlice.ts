import { createSlice } from "@reduxjs/toolkit";

export interface ResetPasswordState {
  loading: boolean;
  error: any;
}

const initialState: ResetPasswordState = {
  loading: false,
  error: {},
};

export const Slice = createSlice({
  name: "reset_password",
  initialState,
  reducers: {
    resetPending: (state) => {
      state.loading = true;
    },
    resetSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    resetErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetPending, resetSuccess, resetErorr } = Slice.actions;

export default Slice.reducer;
