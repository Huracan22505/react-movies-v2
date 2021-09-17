import { createAction } from '@reduxjs/toolkit';

export const fetchMoviesSuccess = createAction('movies/fetchMoviesSuccess');
export const resetMovies = createAction('movies/resetMovies');
export const setFavoriteCounter = createAction('movies/setFavoriteCounter');
