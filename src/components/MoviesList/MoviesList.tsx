import s from './MoviesList.module.css';
import { useLocation } from 'react-router-dom';
import Movie from 'components/Movie';

interface IMovie {
  id: string;
  title: string;
  poster_path: string;
}

interface IProps {
  movies: IMovie[];
}

interface ILocation {
  hash: string;
  pathname: string;
  search: string;
}

const MoviesList = ({ movies }: IProps): JSX.Element => {
  const location: ILocation = useLocation();

  return (
    <ul className={`${s.list} list`}>
      {movies.map(({ id, title, poster_path }) => (
        <Movie
          key={id}
          id={id}
          title={title}
          poster_path={poster_path}
          location={location}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
