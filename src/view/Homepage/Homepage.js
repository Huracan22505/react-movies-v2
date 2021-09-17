import s from './Homepage.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesList from 'components/MoviesList';
import moviesOperations from 'redux/movies/movies-operations';
import Loader from 'components/Loader/Loader';

export default function Homepage() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.items);

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies(page));
  }, [dispatch, page]);

  useEffect(() => {
    return dispatch(moviesOperations.resetStore());
  }, [dispatch]);

  return (
    <div className={`container`}>
      <h1 className={s.title}>Trending today</h1>

      {movies && (
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={Loader()}
          scrollThreshold={1}
        >
          <MoviesList movies={movies} />
        </InfiniteScroll>
      )}
    </div>
  );
}
