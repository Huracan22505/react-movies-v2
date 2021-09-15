import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
  resetMovies,
  setFavoriteCounter,
} from "./movies-actions";

const items = createReducer([], {
  [fetchMoviesSuccess]: (state, { payload }) => [...state, ...payload.results],
  [resetMovies]: (state, { payload }) => [],
});

const favoriteCount = createReducer(0, {
  [setFavoriteCounter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  favoriteCount,
});
