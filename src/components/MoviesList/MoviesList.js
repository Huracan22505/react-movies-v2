import s from "./MoviesList.module.css";
import { Link, withRouter } from "react-router-dom";
import defaultImg from "images/default-img.jpg";

const MoviesList = ({ movies, location }) => (
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
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultImg
            }
            alt={title}
            width={280}
          ></img>
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(MoviesList);
