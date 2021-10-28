import { ICast, IMovie, IReview } from 'common/interfaces';
import { Actions } from './actionsTypes';

export const fetchMoviesRequest = (data: number) => ({
  type: Actions.FetchMoviesRequest,
  payload: data,
});
export const fetchMoviesSuccess = (payload: IMovie[]) => ({
  type: Actions.FetchMoviesSuccess,
  payload,
});

export const fetchCastRequest = (id: string) => ({
  type: Actions.FetchCastRequest,
  payload: id,
});
export const fetchCastSuccess = (payload: ICast[]) => ({
  type: Actions.FetchCastSuccess,
  payload,
});

export const fetchReviewsRequest = (id: string) => ({
  type: Actions.FetchReviewsRequest,
  payload: id,
});
export const fetchReviewsSuccess = (payload: IReview[]) => ({
  type: Actions.FetchReviewsSuccess,
  payload,
});

export const fetchMovieByIdRequest = (id: string) => ({
  type: Actions.FetchMovieByIdRequest,
  id,
});
export const fetchMovieByIdSuccess = (payload: IMovie) => ({
  type: Actions.FetchMovieByIdSuccess,
  payload,
});

export const resetMovies = () => ({
  type: Actions.ResetMovies,
});

export const setFavoriteCounter = (payload: number) => ({
  type: Actions.SetFavoriteCounter,
  payload,
});
