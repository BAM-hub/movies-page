import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: true,
    error: null,
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    getMoviesError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// I dont think we need to export the actions
// export const { getMovies, getMoviesError } = movieSlice.actions;
export default movieSlice.reducer;
