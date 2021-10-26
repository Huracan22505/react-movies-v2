import { Action, IMovieDetails } from 'common/interfaces';
import { Actions } from '../actions/actionsTypes';

interface Store {
  movies: any[];
  movieById: IMovieDetails | null;
}

const initialState: Store = {
  movies: [],
  movieById: null,
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

    default:
      return state;
  }
};
