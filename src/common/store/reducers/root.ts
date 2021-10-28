import {
  Action,
  ICast,
  IMovie,
  IMovieDetails,
  IReview,
} from 'common/interfaces';
import { Actions } from '../actions/actionsTypes';

interface Store {
  movies: IMovie[];
  movieById: IMovieDetails;
  favoriteCount: number | null;
  cast: ICast[];
  reviews: IReview[];
}

const initialState: Store = {
  movies: [],
  movieById: {
    id: '',
    title: '',
    vote_average: 0,
    overview: '',
    genres: [],
    poster_path: '',
  },
  favoriteCount: null,
  cast: [],
  reviews: [],
};

export const rootReducer = (
  state: Store = initialState,
  { type, payload }: Action,
): Store => {
  switch (type) {
    case Actions.FetchMoviesSuccess:
      return { ...state, movies: [...state.movies, ...payload] };
    case Actions.FetchMovieByIdSuccess:
      return { ...state, movieById: payload };
    case Actions.ResetMovies:
      return { ...state, movies: [] };
    case Actions.SetFavoriteCounter:
      return { ...state, favoriteCount: payload };
    case Actions.FetchCastSuccess:
      return { ...state, cast: payload };
    case Actions.FetchReviewsSuccess:
      return { ...state, reviews: payload };

    default:
      return state;
  }
};
