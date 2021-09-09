import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./movies-actions";

const items = createReducer([], {
  [fetchMoviesSuccess]: (state, { payload }) => {
    console.log(payload);
    return [...state, ...payload.results];
  },
});

export default combineReducers({
  items,
});
