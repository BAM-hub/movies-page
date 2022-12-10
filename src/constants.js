// api keys are embedded in the code, this is not a good practice
// but we dont have a server secure our key, I will do it this way

export const API_KEY = "8316be82a3fedf91e83245534d306be3";
export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
