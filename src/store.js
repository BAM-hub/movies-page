import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/auth";
import MovieReducer from "./reducers/movies";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    movie: MovieReducer,
  },
});
