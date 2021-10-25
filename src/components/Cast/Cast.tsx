import s from './Cast.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import defaultImage from './defaultImg.png';
import { useRouteMatch } from 'react-router';

interface IMatchParams {
  params: { movieId: string };
}

interface ICast {
  credit_id: number;
  profile_path: string;
  name: string;
  character: string;
}

function Cast() {
  const [casts, setCasts] = useState<ICast[]>([]);
  const match: IMatchParams = useRouteMatch();

  useEffect(() => {
    const { movieId } = match.params;

    async function fetch() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cac5c08a938bff767b15f4beaa543e5a&language=en-US`,
      );

      setCasts([...response.data.cast]);
    }

    fetch();
  }, [match.params]);

  return (
    <ul className={`${s.list} list`}>
      {casts &&
        casts.map((el: ICast) => {
          return (
            <li className={s.item} key={el.credit_id}>
              <img
                className={s.img}
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : `${defaultImage}`
                }
                alt={el.name}
              ></img>
              <h4 className={s.title}>{el.name}</h4>
              <p className={s.text}>{el.character}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Cast;
