import axios from "axios";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
  resetMovies,
  setFavoriteCounter,
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

const setCounter = (e, detailsPage) => (dispatch) => {
  const data = JSON.parse(localStorage.getItem("favorite"));

  if (e.target.textContent === "Add to favorite") {
    data.push(detailsPage);
    localStorage.setItem("favorite", JSON.stringify(data));
    e.target.textContent = "Remove from favorite";

    dispatch(setFavoriteCounter(data.length));
  } else {
    const newData = data.filter((el) => el.id !== detailsPage.id);
    localStorage.setItem("favorite", JSON.stringify(newData));
    e.target.textContent = "Add to favorite";

    dispatch(setFavoriteCounter(newData.length));
  }
};

const getCounter = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem("favorite"));

  dispatch(setFavoriteCounter(data.length));
};

export default {
  fetchMovies,
  resetStore,
  setCounter,
  getCounter,
};
