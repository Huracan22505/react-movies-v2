import { Suspense, lazy, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import s from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import routes from "routes";
import AppBar from "components/AppBar";

const Homepage = lazy(() =>
  import("view/Homepage" /* webpackChunkName: "Homepage" */)
);
const MoviesPage = lazy(() =>
  import("view/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const FavoritePage = lazy(() =>
  import("view/FavoritePage" /* webpackChunkName: "FavoritePage" */)
);
const MovieDetailsPage = lazy(() =>
  import("view/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <AppBar />

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
          <Route exact path={routes.home} component={Homepage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route exact path={routes.favorite} component={FavoritePage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route component={Homepage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
