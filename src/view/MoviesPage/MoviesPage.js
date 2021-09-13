import s from "./MoviesPage.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

import MoviesList from "components/MoviesList";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.search) fetch(location.search.slice(7));
  }, [location.search]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      alert("Вы ввели пустой запрос!");
      return;
    }

    fetch(query);

    history.push({ ...location, search: `query=${query}` });

    // this.setState({ query: '' });
  };

  const fetch = async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cac5c08a938bff767b15f4beaa543e5a&language=en-US&page=1&include_adult=false`
    );
    return setMovies([...response.data.results]);
  };

  return (
    <div className={`container ${s.container}`}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.searchFormInput}
          type="text"
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
