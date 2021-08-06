import { createSlice } from "@reduxjs/toolkit";

export interface ChangeAvatarState {
  loading: boolean;
  error: any;
}

const initialState: ChangeAvatarState = {
  loading: false,
  error: {},
};

export const Slice = createSlice({
  name: "change_avatar",
  initialState,
  reducers: {
    changeAvatarPending: (state) => {
      state.loading = true;
    },
    changeAvatarSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    changeAvatarErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAvatarPending, changeAvatarSuccess, changeAvatarErorr } =
  Slice.actions;

export default Slice.reducer;
