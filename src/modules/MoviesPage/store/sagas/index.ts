import { all, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import { GET_MOVIES } from '../actions/movies';
import { getMovies } from './movies';

export function* moviesSaga(): SagaIterator {
  yield all([takeEvery(GET_MOVIES, getMovies)]);
}
