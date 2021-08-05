import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./slice/CounterSlice";
import LoginSlice from "./slice/LoginSlice";
import AuthSlice from "./slice/AuthSlice";
import RegisterSlice from "./slice/RegisterSlice";
import ForgotPasswordSlice from "./slice/ForgotPasswordSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    counter: CounterSlice,
    login: LoginSlice,
    register: RegisterSlice,
    forgotPassword: ForgotPasswordSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
