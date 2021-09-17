import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import moviesReducer from './movies/movies-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default {
  store,
};
