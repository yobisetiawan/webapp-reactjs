import { createSlice } from "@reduxjs/toolkit";

export interface ResendVerifyEmailState {
  loading: boolean;
  error: any;
}

const initialState: ResendVerifyEmailState = {
  loading: false,
  error: {},
};

export const Slice = createSlice({
  name: "resend_verify_email",
  initialState,
  reducers: {
    ResendVerifyEmailPending: (state) => {
      state.loading = true;
    },
    ResendVerifyEmailSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    ResendVerifyEmailErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  ResendVerifyEmailPending,
  ResendVerifyEmailSuccess,
  ResendVerifyEmailErorr,
} = Slice.actions;

export default Slice.reducer;
