import { ICast, IMovie, IMovieDetails, IReview } from 'common/interfaces';
import { State } from 'redux/reducers';

export const selectRootMovies = (state: State): IMovie[] => state.root.movies;
export const selectRootMovieById = (state: State): IMovieDetails =>
  state.root.movieById;
export const selectFavoriteCount = (state: State): number | null =>
  state.root.favoriteCount;
export const selectRootCast = (state: State): ICast[] => state.root.cast;
export const selectRootReviews = (state: State): IReview[] =>
  state.root.reviews;
