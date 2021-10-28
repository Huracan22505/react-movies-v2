import s from './MovieDetailsPage.module.css';
import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  NavLink,
  Switch,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Routes } from 'common/routes';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import defaultImage from '../../images/loading.gif';
import { IMatchParams, IMovieDetails } from 'common/interfaces';
import { setCounter } from 'common/utils/counter';
import {
  fetchMovieByIdRequest,
  setFavoriteCounter,
} from 'common/store/actions/movies-actions';
import { selectRootMovieById } from 'common/store/selectors';

const Cast = lazy(
  () => import('components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(
  () => import('components/Reviews' /* webpackChunkName: "Reviews" */),
);

interface ILocationState {
  state: {
    from: {
      pathname: string;
    };
  };
}

export default function MovieDetailsPage() {
  const dispatch = useDispatch();
  const location: ILocationState = useLocation();
  const history = useHistory();
  const match: IMatchParams = useRouteMatch();

  const favoriteBtn = useRef<HTMLButtonElement>(null);
  const detailsPage = useSelector(selectRootMovieById);

  useEffect(() => {
    const { movieId } = match.params;

    dispatch(fetchMovieByIdRequest(movieId));
  }, [dispatch, match.params]);

  useEffect(() => {
    const localStore = localStorage.getItem('favorite');
    if (typeof localStore !== 'string')
      throw new Error('Local Storage not found');

    const localStorageData = JSON.parse(localStore);

    const ids: string[] = [];
    localStorageData.forEach((el: IMovieDetails) => ids.push(el.id));

    if (!detailsPage) return;
    if (!favoriteBtn) return;

    if (null !== favoriteBtn.current)
      if (ids.includes(detailsPage.id)) {
        favoriteBtn.current.textContent = 'Remove from favorite';
      } else {
        favoriteBtn.current.textContent = 'Add to favorite';
      }
  }, [detailsPage]);

  const handleGoBack = () => {
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    history.push(location?.state?.from || Routes.Home);
  };

  const handleAddToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    const counter = setCounter(e, detailsPage);

    dispatch(setFavoriteCounter(counter));
  };

  const {
    title,
    vote_average,
    overview,
    genres,
    poster_path,
  }: IMovieDetails = detailsPage;

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
        <img className={s.img} src={imageCheck} width={300} alt=""></img>
        <div className={s.textContainer}>
          <h3 className={s.name}>{title}</h3>
          <p className={s.text}>User Score: {`${vote_average * 10}%`}</p>
          <h4 className={s.title}>Overview</h4>
          <p className={s.text}>{overview}</p>

          {genres && (
            <>
              <h4 className={s.title}>Genres</h4>
              <ul className={`${s.list} list`}>
                {genres.map(genre => (
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
                  fontWeight: 'bold',
                  color: 'white',
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
                  fontWeight: 'bold',
                  color: 'white',
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
