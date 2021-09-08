import axios from "axios";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./contacts-actions";

const fetchMovies = () => async (dispatch) => {
  dispatch(fetchMoviesRequest());

  try {
    const { data } = await axios.get("/movies");

    dispatch(fetchMoviesSuccess(data));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch(error => dispatch(fetchContactsError(error)));
};

export default {
  fetchMovies,
};
