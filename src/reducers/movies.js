export default movieSlice = createReducer({
  name: "movie",
  initialState: {
    movies: [],
    movie: {},
    loading: false,
    error: null,
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { getMovies } = movieSlice.actions;
