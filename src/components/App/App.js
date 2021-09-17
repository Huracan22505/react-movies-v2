import { Suspense, lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch } from 'react-router-dom';

import routes from 'routes';
import AppBar from 'components/AppBar';
import Loader from 'components/Loader/Loader';

const Homepage = lazy(() =>
  import('view/Homepage' /* webpackChunkName: "Homepage" */),
);
const MoviesPage = lazy(() =>
  import('view/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const FavoritePage = lazy(() =>
  import('view/FavoritePage' /* webpackChunkName: "FavoritePage" */),
);
const MovieDetailsPage = lazy(() =>
  import('view/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={Loader()}>
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
