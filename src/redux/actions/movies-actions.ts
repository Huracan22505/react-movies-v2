import { IMovie } from 'common/interfaces';
import { Actions } from './actionsTypes';

export const fetchMoviesRequest = (data: number) => ({
  type: Actions.FetchMoviesRequest,
  payload: data,
});
export const fetchMoviesSuccess = (data: IMovie[]) => ({
  type: Actions.FetchMoviesSuccess,
  payload: data,
});

export const fetchMovieByIdRequest = (id: string) => ({
  type: Actions.FetchMovieByIdRequest,
  id,
});
export const fetchMovieByIdSuccess = (data: IMovie) => ({
  type: Actions.FetchMovieByIdSuccess,
  payload: data,
});

export const resetMovies = () => ({
  type: Actions.ResetMovies,
});

export const setFavoriteCounter = (data: number) => ({
  type: Actions.SetFavoriteCounter,
  payload: data,
});
