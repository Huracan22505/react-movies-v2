import s from './Homepage.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader/Loader';
import {
  fetchMoviesRequest,
  resetMovies,
} from 'common/store/actions/movies-actions';
import { selectRootMovies } from 'common/store/selectors';

export default function Homepage() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const movies = useSelector(selectRootMovies);

  useEffect(() => {
    dispatch(fetchMoviesRequest(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(resetMovies());
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
          style={{ overflow: 'visible' }}
        >
          <MoviesList movies={movies} />
        </InfiniteScroll>
      )}
    </div>
  );
}
