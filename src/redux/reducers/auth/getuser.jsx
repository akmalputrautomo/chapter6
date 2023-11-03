import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/Cookies";

const initialState = {
  //   token: "",
  isUser: "",
  //   user: "",
};

const authGetUserSlice = createSlice({
  name: "GetUser",
  initialState,
  reducers: {
    // setToken: (state, action) => {
    //   //   state.token = { ...state.token, token: action.payload };
    //   // state.token = action.payload;
    // },
    setIsUserIn: (state, action) => {
      state.isUser = action.payload;
      // state.isUser = { ...state.isUser, isUser: action.payload };
    },
    // setUser: (state, action) => {
    //   // state.user = { ...state.user, user: action.payload };
    //   //   state.user = action.payload;
    // },
  },
});

export const { setToken, setIsUserIn, setUser } = authGetUserSlice.actions;

export default authGetUserSlice.reducer;
