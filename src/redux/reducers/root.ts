import { Action, ICast, IMovie, IMovieDetails } from 'common/interfaces';
import { Actions } from '../actions/actionsTypes';

interface Store {
  movies: IMovie[];
  movieById: IMovieDetails | null;
  favoriteCount: number | null;
  cast: ICast[];
}

const initialState: Store = {
  movies: [],
  movieById: null,
  favoriteCount: null,
  cast: [],
};

export const rootReducer = (
  state: Store = initialState,
  { type, payload }: Action,
): Store => {
  switch (type) {
    case Actions.FetchMoviesSuccess:
      return { ...state, movies: [...state.movies, ...payload] };
    case Actions.FetchMovieByIdSuccess:
      return { ...state, movieById: payload };
    case Actions.ResetMovies:
      return { ...state, movies: [] };
    case Actions.SetFavoriteCounter:
      return { ...state, favoriteCount: payload };
    case Actions.FetchCastSuccess:
      return { ...state, cast: payload };

    default:
      return state;
  }
};
