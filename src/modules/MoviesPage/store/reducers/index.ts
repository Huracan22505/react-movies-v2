import { combineReducers } from 'redux';
import { moviesPageReducer } from './movies';

export const moviesReducers = combineReducers({
  moviesItems: moviesPageReducer,
});
