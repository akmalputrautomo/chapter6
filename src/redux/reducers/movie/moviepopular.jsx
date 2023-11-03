import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "PopularMovie",
  initialState: {
    movies: [],
  },
  reducers: {
    updateMovie(state, action) {
      state.movies = action.payload;
    },
  },
});
export const { updateMovie } = movieslice.actions;

export default movieslice.reducer;
