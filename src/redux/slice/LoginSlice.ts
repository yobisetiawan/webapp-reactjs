import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  loading: boolean;
  success: boolean;
  error: any;
}

const initialState: LoginState = {
  loading: false,
  success: false,
  error: {},
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = {};
    },
    loginErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginPending, loginSuccess, loginErorr } = counterSlice.actions;

export default counterSlice.reducer;
