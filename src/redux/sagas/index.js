import { MoviesApi } from 'modules/movies/services/movies-api.service';
import { put, call, takeLatest, all } from 'redux-saga/effects';
// import { SagaIterator } from '@redux-saga/types';
import {
  fetchMovieByIdSuccess,
  fetchMoviesSuccess,
} from '../actions/movies-actions.js';
import { Actions } from '../actions/actionsTypes';

export function* fetchMoviesSaga({ payload }) {
  try {
    const movies = yield call(MoviesApi.getMovies, payload);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    throw Error(error.message);
  }
}

export function* fetchMovieByIdSaga(id) {
  try {
    const movie = yield call(MoviesApi.getMovieById, id);
    yield put(fetchMovieByIdSuccess(movie));
  } catch (error) {
    throw Error(error.message);
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(Actions.FetchMoviesRequest, fetchMoviesSaga),
    takeLatest(Actions.FetchMovieByIdRequest, fetchMovieByIdSaga),
  ]);
}
