import { createSlice } from "@reduxjs/toolkit";

export interface ChangeProfileState {
  loading: boolean;
  error: any;
}

const initialState: ChangeProfileState = {
  loading: false,
  error: {},
};

export const Slice = createSlice({
  name: "change_password",
  initialState,
  reducers: {
    changeProfilePending: (state) => {
      state.loading = true;
    },
    changeProfileSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    changeProfileErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeProfilePending,
  changeProfileSuccess,
  changeProfileErorr,
} = Slice.actions;

export default Slice.reducer;
