import { createSlice } from "@reduxjs/toolkit";

const moviesDetail = createSlice({
  name: "PopularMovie",
  initialState: {
    movies: [],
  },
  reducers: {
    MoviesDetails(state, action) {
      state.movies = action.payload;
    },
  },
});
export const { MoviesDetails, MovieId } = moviesDetail.actions;

export default moviesDetail.reducer;
