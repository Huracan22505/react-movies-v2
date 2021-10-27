import { Actions } from './actionsTypes';

export const fetchMoviesRequest = data => ({
  type: Actions.FetchMoviesRequest,
  payload: data,
});
export const fetchMoviesSuccess = data => ({
  type: Actions.FetchMoviesSuccess,
  payload: data,
});

export const fetchMovieByIdRequest = id => ({
  type: Actions.fetchMovieByIdRequest,
  id,
});
export const fetchMovieByIdSuccess = data => ({
  type: Actions.fetchMovieByIdSuccess,
  payload: data,
});

export const resetMovies = () => ({
  type: Actions.ResetMovies,
});

export const setFavoriteCounter = data => ({
  type: Actions.SetFavoriteCounter,
  payload: data,
});
