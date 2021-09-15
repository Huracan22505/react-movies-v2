import routes from "routes";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";

const Navigation = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("favorite")).length
  );

  const counter = useSelector((state) => state.movies.favoriteCount);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  return (
    <nav>
      <ul className={`${s.list} list`}>
        <li className={s.item}>
          <NavLink
            exact
            to={routes.home}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            exact
            to={routes.favorite}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Favorite <div className="fav-counter">{count}</div>
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            to={routes.movies}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
