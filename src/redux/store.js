import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import moviesReducer from "./movies/movies-reducer";
// import { authReducer } from "./auth";

const middleware = [...getDefaultMiddleware(), logger];

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    movies: moviesReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

export default {
  store,
  // persistor
};
