import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  loading: boolean;
  error: any;
  list: any;
  selected: any;
}

const initialState: LoginState = {
  loading: false,
  error: {},
  list: [],
  selected: null,
};

export const Slice = createSlice({
  name: "user_list",
  initialState,
  reducers: {
    UserListPending: (state) => {
      state.loading = true;
    },
    UserListSuccess: (state, action) => {
      state.loading = false;
      state.error = {};
      state.list = action.payload;
    },
    UserListErorr: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UserListSetSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  UserListPending,
  UserListSuccess,
  UserListErorr,
  UserListSetSelected,
} = Slice.actions;

export default Slice.reducer;
