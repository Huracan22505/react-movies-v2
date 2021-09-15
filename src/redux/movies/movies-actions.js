import { createAction } from "@reduxjs/toolkit";

export const fetchMoviesRequest = createAction("movies/fetchMoviesRequest");
export const fetchMoviesSuccess = createAction("movies/fetchMoviesSuccess");
export const fetchMoviesError = createAction("movies/fetchMoviesError");

export const resetMovies = createAction("movies/resetMovies");

export const setFavoriteCounter = createAction("movies/setFavoriteCounter");
