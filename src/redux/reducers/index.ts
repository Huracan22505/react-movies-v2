import { moviesReducers } from 'modules/MoviesPage/store';
import { combineReducers } from 'redux';
import { rootReducer } from './root';

export const reducers = combineReducers({
  root: rootReducer,
  movies: moviesReducers,
});

export type State = ReturnType<typeof reducers>;
