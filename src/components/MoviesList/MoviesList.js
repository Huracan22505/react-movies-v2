import s from "./MoviesList.module.css";
import { Link, withRouter } from "react-router-dom";
import Movie from "components/Movie";

const MoviesList = ({ movies, location }) => (
  <ul className={`${s.list} list`}>
    {movies.map(({ id, title, poster_path }) => (
      <Movie
        id={id}
        title={title}
        poster_path={poster_path}
        location={location}
      />
    ))}
  </ul>
);

export default withRouter(MoviesList);
