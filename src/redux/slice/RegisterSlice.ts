import { createSlice } from "@reduxjs/toolkit";

export interface RegisterState {
  loading: boolean;
  error: any;
}

const initialState: RegisterState = {
  loading: false,
  error: {},
};

export const counterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerPending: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    registerErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { registerPending, registerSuccess, registerErorr } =
  counterSlice.actions;

export default counterSlice.reducer;
