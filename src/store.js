import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/auth";
import MovieReducer from "./reducers/movies";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: AuthReducer,
    movie: MovieReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
