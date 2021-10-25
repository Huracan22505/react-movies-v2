import { Link } from 'react-router-dom';
import { useState } from 'react';
import defaultImg from 'images/loading.gif';
import s from './Movie.module.css';

interface ILocation {
  hash: string;
  pathname: string;
  search: string;
}

interface IProps {
  id: string;
  title: string;
  poster_path: string;
  location: ILocation;
}

const Movie = ({ id, title, poster_path, location }: IProps) => {
  const [loaded, setLoaded] = useState<boolean>();

  return (
    <li className={s.item}>
      {loaded ? null : (
        <div
          style={{
            background: `url(${defaultImg}) center`,
            height: '100%',
            width: '100%',
          }}
        />
      )}
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
          onLoad={() => setLoaded(true)}
          style={loaded ? {} : { display: 'none' }}
          alt={title}
          width={280}
        ></img>
      </Link>
    </li>
  );
};

export default Movie;
