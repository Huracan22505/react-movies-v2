import { Actions } from './actionsTypes';

export const fetchMoviesSuccess = data => ({
  type: Actions.FetchMoviesSuccess,
  payload: data,
});

export const fetchMoviesRequest = data => ({
  type: Actions.FetchMoviesRequest,
  payload: data,
});

export const fetchMovieByIdRequest = id => ({
  type: Actions.fetchMovieByIdRequest,
  id,
});

export const fetchMovieByIdSuccess = data => {
  return {
    type: Actions.fetchMovieByIdSuccess,
    payload: data,
  };
};
