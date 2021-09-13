import s from "./MoviesList.module.css";
import { Link, withRouter } from "react-router-dom";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={`${s.list} list`}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={s.item} key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width={280}
            ></img>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
