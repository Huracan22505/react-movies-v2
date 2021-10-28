import { SagaIterator } from '@redux-saga/types';
import { MoviesApi } from '../../service/movies-api.service';
import { call, put } from 'redux-saga/effects';
import { putMovies, putMoviesError } from '../actions/movies';

interface IParams {
  payload: string;
  type: string;
}

export function* getMovies({ payload }: IParams): SagaIterator {
  try {
    const movies = yield call(MoviesApi.getMovies, payload);
    yield put(putMovies(movies));
  } catch (error: any) {
    yield put(putMoviesError(error));
  }
}
