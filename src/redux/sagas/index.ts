import { MoviesApi } from 'modules/movies/services/movies-api.service';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import {
  fetchMovieByIdSuccess,
  fetchMoviesSuccess,
} from '../actions/movies-actions.js';
import { Actions } from '../actions/actionsTypes';
import { IMovie } from 'common/interfaces/index.js';

interface IParams {
  payload: number;
  type: string;
}

export function* fetchMoviesSaga({ payload }: IParams): SagaIterator {
  try {
    const movies = yield call(MoviesApi.getMovies, payload);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    console.log('Error fetchMoviesSaga');
  }
}

export function* fetchMovieByIdSaga(id: string | any): SagaIterator {
  try {
    const movie: IMovie = yield call(MoviesApi.getMovieById, id);
    yield put(fetchMovieByIdSuccess(movie));
  } catch (error) {
    console.log('Error fetchMovieByIdSaga');
  }
}

export function* rootSaga(): SagaIterator {
  yield all([
    takeLatest(Actions.FetchMoviesRequest, fetchMoviesSaga),
    takeLatest(Actions.FetchMovieByIdRequest, fetchMovieByIdSaga),
  ]);
}
