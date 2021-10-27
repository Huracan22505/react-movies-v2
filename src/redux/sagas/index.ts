import { MoviesApi } from 'modules/movies/services/movies-api.service';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import {
  fetchCastSuccess,
  fetchMovieByIdSuccess,
  fetchMoviesSuccess,
} from '../actions/movies-actions';
import { Actions } from '../actions/actionsTypes';
import { ICast, IMovie } from 'common/interfaces/index.js';

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

export function* fetchCastByIdSaga({ payload }: string | any): SagaIterator {
  console.log(
    '🚀 ~ file: index.ts ~ line 36 ~ function*fetchCastByIdSaga ~ payload',
    payload,
  );
  try {
    const cast: ICast[] = yield call(MoviesApi.getCastById, payload);
    console.log(
      '🚀 ~ file: index.ts ~ line 38 ~ function*fetchCastByIdSaga ~ cast',
      cast,
    );
    yield put(fetchCastSuccess(cast));
  } catch (error) {
    console.log('Error fetchCastByIdSaga');
  }
}

export function* rootSaga(): SagaIterator {
  yield all([
    takeLatest(Actions.FetchMoviesRequest, fetchMoviesSaga),
    takeLatest(Actions.FetchMovieByIdRequest, fetchMovieByIdSaga),
    takeLatest(Actions.FetchCastRequest, fetchCastByIdSaga),
  ]);
}
