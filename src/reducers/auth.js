import { createReducer } from "@reduxjs/toolkit";

export default authSlice = createReducer({
  name: "auth",
  initialState: {
    userName: "",
    password: "",
    isAuth: false,
  },
  reducers: {
    login: (state, action) => {
      const { userName, password } = action.payload;
      state.userName = userName;
      state.password = password;
      state.isAuth = true;
    },
    logout: (state) => {
      state.userName = "";
      state.password = "";
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
