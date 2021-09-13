import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
  resetMovies,
} from "./movies-actions";

const items = createReducer([], {
  [fetchMoviesSuccess]: (state, { payload }) => [...state, ...payload.results],
  [resetMovies]: (state, { payload }) => [],
});

export default combineReducers({
  items,
});
