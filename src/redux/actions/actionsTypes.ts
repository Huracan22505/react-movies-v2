export enum Actions {
  FetchMoviesRequest = 'movies/fetchMoviesRequest',
  FetchMoviesSuccess = 'movies/fetchMoviesSuccess',

  FetchCastRequest = 'movies/fetchCastRequest',
  FetchCastSuccess = 'movies/fetchCastSuccess',

  FetchReviewsRequest = 'movies/fetchReviewsRequest',
  FetchReviewsSuccess = 'movies/fetchReviewsSuccess',

  FetchMovieByIdRequest = 'movies/fetchMovieByIdRequest',
  FetchMovieByIdSuccess = 'movies/fetchMovieByIdSuccess',

  ResetMovies = 'movies/resetMovies',
  SetFavoriteCounter = 'movies/setFavoriteCounter',
}
