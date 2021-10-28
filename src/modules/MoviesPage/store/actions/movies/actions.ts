import { Action, IMovie } from 'common/interfaces';
import { GET_MOVIES, PUT_MOVIES, PUT_MOVIES_ERROR } from './actionTypes';

export const getMovies = (query: string): Action => ({
  type: GET_MOVIES,
  payload: query,
});

export const putMovies = (movies: IMovie[]): Action => ({
  type: PUT_MOVIES,
  payload: movies,
});

export const putMoviesError = (error: Error): Action => ({
  type: PUT_MOVIES_ERROR,
  payload: error,
});
