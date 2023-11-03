import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/Cookies";

const initialState = {
  token: "",
  isLogin: "",
  user: "",
};

const authLoginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = { ...state.token, token: action.payload };
      // state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLogin = action.payload;
      // state.isLogin = { ...state.isLogin, isLogin: action.payload };
    },
    setUser: (state, action) => {
      // state.user = { ...state.user, user: action.payload };
      state.user = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;

export default authLoginSlice.reducer;
