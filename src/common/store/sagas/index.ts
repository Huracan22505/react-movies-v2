import { all, fork, takeEvery } from 'redux-saga/effects';
import { Actions } from '../actions/actionsTypes';
import { moviesSaga } from 'modules/MoviesPage/store';
import {
  fetchCastByIdSaga,
  fetchMovieByIdSaga,
  fetchMoviesSaga,
  fetchReviewsByIdSaga,
} from './movies';
import { SagaIterator } from 'redux-saga';

export function* rootSaga(): SagaIterator {
  yield all([
    takeEvery(Actions.FetchMoviesRequest, fetchMoviesSaga),
    takeEvery(Actions.FetchMovieByIdRequest, fetchMovieByIdSaga),
    takeEvery(Actions.FetchCastRequest, fetchCastByIdSaga),
    takeEvery(Actions.FetchReviewsRequest, fetchReviewsByIdSaga),
    fork(moviesSaga),
  ]);
}
