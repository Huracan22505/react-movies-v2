export interface Action {
  type: string;
  payload?: any;
  meta?: any;
}

export interface IMovie {
  id: string;
  title: string;
  poster_path: string;
}

export interface IMovieDetails {
  id: string;
  title: string;
  vote_average: number;
  overview: string;
  genres: Array<{
    id: string;
    name: string;
  }>;
  poster_path: string;
}

export interface IMatchParams {
  path: string;
  url: string;
  params: { movieId: string };
}

export interface ICast {
  credit_id: number;
  profile_path: string;
  name: string;
  character: string;
}

export interface IReview {
  id: string;
  author: string;
  content: string;
}
