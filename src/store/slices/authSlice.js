import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", state.token);
      window.location.reload();
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
