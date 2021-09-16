import s from "./MoviesPage.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    fetch(query);
  };

  const fetch = async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cac5c08a938bff767b15f4beaa543e5a&language=en-US&page=1&include_adult=false`
    );

    if (response.data.results.length < 1) {
      toast.error("Wrong request. No results!");
      setQuery("");
      return;
    }

    history.push({ ...location, search: `query=${query}` });
    setMovies([...response.data.results]);
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

      {movies && <MoviesList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
