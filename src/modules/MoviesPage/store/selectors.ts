import { State } from 'redux/reducers';

export const selectMoviesItems = (state: State) =>
  state.movies.moviesItems.entities;
