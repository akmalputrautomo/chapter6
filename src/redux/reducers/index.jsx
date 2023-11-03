import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authlogin";
import authRegisterSlice from "./auth/authregister";
import movieslice from "./movie/moviepopular";
import moviesDetail from "./movie/moviedetail";
import authGetUserSlice from "./auth/getuser";
import movieSearch from "./movie/moviesearch";

export default combineReducers({
  auth: authLoginSlice,
  regis: authRegisterSlice,
  movie: movieslice,
  get: authGetUserSlice,
  detail: moviesDetail,
  search: movieSearch,
});
