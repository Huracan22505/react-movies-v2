import s from './MoviesPage.module.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MoviesList from 'components/MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMoviesIsLoading,
  selectMoviesItems,
} from 'modules/MoviesPage/store/selectors';
import { getMovies } from 'modules/MoviesPage/store/actions/movies';
import Loader from 'components/Loader/Loader';

function MoviesPage() {
  const [query, setQuery] = useState('');

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesItems);
  const isLoading = useSelector(selectMoviesIsLoading);

  useEffect(() => {
    if (location.search) dispatch(getMovies(location.search.slice(7)));
  }, [dispatch, location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const fetch = async () => {
    await dispatch(getMovies(query));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch();

    // if (movies.length < 1) {
    //   toast.error('Wrong request. No results!');
    //   setQuery('');
    //   return;
    // }

    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <div className={`container ${s.container}`}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
          required
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
      <ToastContainer />

      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
