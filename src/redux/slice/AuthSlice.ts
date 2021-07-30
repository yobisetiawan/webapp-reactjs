import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {},
  is_login: false,
  is_loading: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.is_loading = false;
      state.is_login = true;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
