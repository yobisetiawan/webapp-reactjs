import { createSlice } from "@reduxjs/toolkit";

export interface ForgotPasswordState {
  loading: boolean;
  error: any;
}

const initialState: ForgotPasswordState = {
  loading: false,
  error: {},
};

export const Slice = createSlice({
  name: "forgot_password",
  initialState,
  reducers: {
    forgotPending: (state) => {
      state.loading = true;
    },
    forgotSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    forgotErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { forgotPending, forgotSuccess, forgotErorr } = Slice.actions;

export default Slice.reducer;
