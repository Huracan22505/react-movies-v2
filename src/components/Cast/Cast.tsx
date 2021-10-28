import s from './Cast.module.css';
import { useEffect } from 'react';
import defaultImage from './defaultImg.png';
import { useRouteMatch } from 'react-router';
import { IMatchParams, ICast } from 'common/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCastRequest } from 'common/store/actions/movies-actions';
import { selectRootCast } from 'common/store/selectors';

function Cast() {
  const match: IMatchParams = useRouteMatch();
  const dispatch = useDispatch();

  const cast = useSelector(selectRootCast);

  useEffect(() => {
    const { movieId } = match.params;

    dispatch(fetchCastRequest(movieId));
  }, [dispatch, match.params]);

  return (
    <ul className={`${s.list} list`}>
      {cast &&
        cast.map((el: ICast) => (
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
        ))}
    </ul>
  );
}

export default Cast;
