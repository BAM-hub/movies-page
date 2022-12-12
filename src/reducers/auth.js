import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
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
