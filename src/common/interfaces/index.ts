export interface Action {
  type: string;
  payload: any;
  meta: any;
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
