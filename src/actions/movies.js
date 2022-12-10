import { API_URL } from "../constants";

export const getMovies = () => async (dispatch) => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    dispatch({
      type: "movie/getMovies",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "movie/getMoviesError",
      payload: err,
    });
  }
};
