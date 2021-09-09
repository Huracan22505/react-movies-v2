import s from "./Homepage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";
import MoviesList from "components/MoviesList";
import moviesOperations from "redux/movies/movies-operations";

export default function Homepage() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items);
  console.log("🚀 ~ file: Homepage.js ~ line 14 ~ Homepage ~ movies", movies);

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies(page));
  }, [dispatch, page]);

  return (
    <div className={`container`}>
      <h1 className={s.title}>Trending today</h1>

      {movies && (
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <MoviesList movies={movies} />
        </InfiniteScroll>
      )}
    </div>
  );
}
