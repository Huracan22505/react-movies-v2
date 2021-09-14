import s from "./FavoritePage.module.css";

import MoviesList from "components/MoviesList";

export default function FavoritePage() {
  const movies = JSON.parse(localStorage.getItem("favorite"));

  return (
    <div className={`container`}>
      <h1 className={s.title}>Favorite films</h1>

      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p className={s.text}>Add some movies to favorite</p>
      )}
    </div>
  );
}
