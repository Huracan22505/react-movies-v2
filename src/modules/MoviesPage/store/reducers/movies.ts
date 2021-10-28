import { Action } from 'common/interfaces';
import { GET_MOVIES, PUT_MOVIES, PUT_MOVIES_ERROR } from '../actions/movies';

interface Store {
  loading: boolean;
  entities: [];
  error: Error | null;
}

const initialState: Store = {
  loading: false,
  entities: [],
  error: null,
};

export const moviesPageReducer = (
  state: Store = initialState,
  { type, payload }: Action,
): Store => {
  switch (type) {
    case GET_MOVIES:
      return { ...state, loading: true };

    case PUT_MOVIES: {
      return { ...state, loading: false, entities: payload };
    }

    case PUT_MOVIES_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
