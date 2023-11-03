import { createSlice } from "@reduxjs/toolkit";

const movieSearch = createSlice({
  name: "PopularMovie",
  initialState: {
    movies: [],
  },
  reducers: {
    SearchMovie(state, action) {
      state.movies = action.payload;
    },
  },
});
export const { SearchMovie } = movieSearch.actions;

export default movieSearch.reducer;
