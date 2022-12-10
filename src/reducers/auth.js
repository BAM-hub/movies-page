import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    password: "",
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const { userName, password } = action.payload;
      state.userName = userName;
      state.password = password;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userName = "";
      state.password = "";
      state.isAuthenticated = false;
    },
  },
});
// I dont think we need to export the actions
// export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
