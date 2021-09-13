import axios from "axios";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
  resetMovies,
} from "./movies-actions";

const fetchMovies = (page) => async (dispatch) => {
  dispatch(fetchMoviesRequest());

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=cac5c08a938bff767b15f4beaa543e5a&page=${page}`
    );

    dispatch(fetchMoviesSuccess(data));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch(error => dispatch(fetchContactsError(error)));
};

const resetStore = () => (dispatch) => {
  dispatch(resetMovies());
};

export default {
  fetchMovies,
  resetStore,
};
