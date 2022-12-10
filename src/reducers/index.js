import { combineReducers } from "redux";
import authSlice from "./auth";
import movieSlice from "./movies";

export default combineReducers({
  auth: authSlice.reducer,
  movie: movieSlice.reducer,
});
