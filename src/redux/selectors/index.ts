import { IMovie, IMovieDetails } from 'common/interfaces';
import { State } from 'redux/reducers';

export const selectRootMovies = (state: State): IMovie[] => state.root.movies;
export const selectRootMovieById = (state: State): IMovieDetails | null =>
  state.root.movieById;
export const selectFavoriteCount = (state: State): number | null =>
  state.root.favoriteCount;
