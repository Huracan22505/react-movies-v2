import s from "./Homepage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import MoviesList from "components/MoviesList";
import moviesOperations from "redux/movies/movies-operations";

export default function Homepage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items.results);
  console.log("🚀 ~ file: Homepage.js ~ line 40 ~ Homepage ~ movies", movies);

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies());
  }, [dispatch]);

  return (
    <div className={`container`}>
      <h1 className={s.title}>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}
