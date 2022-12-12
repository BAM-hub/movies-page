import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";
import AuthReducer from "./reducers/auth";
import MovieReducer from "./reducers/movies";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getMovies } from "./actions/movies";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["movie"],
};

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: "persist/REHYDRATE",
  effect: async (action, listenerApi) => {
    if (
      action.payload?.auth?.isAuthenticated &&
      (await listenerApi.getState().movie.movies.length) === 0
    )
      listenerApi.dispatch(getMovies());
  },
});

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: AuthReducer,
    movie: MovieReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export const persistor = persistStore(store);
