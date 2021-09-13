import s from "./MovieDetailsPage.module.css";
import axios from "axios";
import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import {
  Route,
  NavLink,
  Switch,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import routes from "routes";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import defaultImage from "components/Cast/defaultImg.png";

const Cast = lazy(() =>
  import("components/Cast" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("components/Reviews" /* webpackChunkName: "Reviews" */)
);

export default function MovieDetailsPage() {
  const [detailsPage, setDetailsPage] = useState({});
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const favoriteBtn = useRef(null);

  useEffect(() => {
    const { movieId } = match.params;

    async function fetch() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cac5c08a938bff767b15f4beaa543e5a&language=en-US`
      );

      setDetailsPage({
        ...response.data,
      });
    }

    fetch();
  }, [match.params]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("favorite"));
    const ids = [];
    localStorageData.forEach((el) => ids.push(el.id));

    if (ids.includes(detailsPage.id)) {
      favoriteBtn.current.textContent = "Remove from favorite";
    } else {
      favoriteBtn.current.textContent = "Add to favorite";
    }
  }, [detailsPage.id]);

  const handleGoBack = () => {
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    history.push(location?.state?.from || routes.home);
  };

  const handleAddToFavorite = (e) => {
    const data = JSON.parse(localStorage.getItem("favorite"));

    if (e.target.textContent === "Add to favorite") {
      data.push(detailsPage);
      localStorage.setItem("favorite", JSON.stringify(data));
      e.target.textContent = "Remove from favorite";
    } else {
      localStorage.setItem(
        "favorite",
        JSON.stringify(data.filter((el) => el.id !== detailsPage.id))
      );
      e.target.textContent = "Add to favorite";
    }
  };

  const { title, vote_average, overview, genres, poster_path } = detailsPage;

  const imageCheck = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImage;

  return (
    <div className={`container`}>
      <button className={s.button} type="button" onClick={handleGoBack}>
        Go back
      </button>
      <button
        ref={favoriteBtn}
        className={s.button}
        type="button"
        onClick={handleAddToFavorite}
      ></button>
      <div className={s.container}>
        <img className={s.img} src={imageCheck} alt=""></img>
        <div className={s.textContainer}>
          <h3 className={s.name}>{title}</h3>
          <p className={s.text}>User Score: {`${vote_average * 10}%`}</p>
          <h4 className={s.title}>Overview</h4>
          <p className={s.text}>{overview}</p>

          {genres && (
            <>
              <h4 className={s.title}>Genres</h4>
              <ul className={`${s.list} list`}>
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className={s.title}>Additional information</h4>
          <ul className={`${s.list} list`}>
            <li>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                className={s.link}
                to={{
                  pathname: `${match.url}/cast`,
                  state: { ...location.state },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
                className={s.link}
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { ...location.state },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </Suspense>
    </div>
  );
}
