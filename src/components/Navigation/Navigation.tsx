import { Routes } from 'routes';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounter } from 'modules/movies/counter';
import { setFavoriteCounter } from 'redux/actions/movies-actions';
import { selectFavoriteCount } from 'redux/selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState<number | null>(null);

  const counter = useSelector(selectFavoriteCount);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  useEffect(() => {
    if (!localStorage.getItem('favorite')) {
      localStorage.setItem('favorite', JSON.stringify([]));
    }

    const counter = getCounter();

    dispatch(setFavoriteCounter(counter));
  }, [dispatch]);

  return (
    <nav>
      <ul className={`${s.list} list`}>
        <li className={s.item}>
          <NavLink
            exact
            to={Routes.Home}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to={Routes.Movies}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Movies
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            exact
            to={Routes.Favorite}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Favorite <div className="fav-counter">{count}</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
