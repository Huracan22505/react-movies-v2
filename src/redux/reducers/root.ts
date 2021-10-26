import { Action } from 'common/interfaces';
import { Actions } from '../actions/actionsTypes';

interface Store {
  movies: null;
  movieById: null;
}

const initialState: Store = {
  movies: null,
  movieById: null,
};

export const rootReducer = (
  state: Store = initialState,
  { type, payload }: Action,
): Store => {
  switch (type) {
    case Actions.FetchMoviesSuccess:
      return { ...state, movies: payload };
    case Actions.fetchMovieByIdSuccess:
      return { ...state, movieById: payload };

    default:
      return state;
  }
};
