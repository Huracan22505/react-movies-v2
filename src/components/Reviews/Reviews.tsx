import s from './Reviews.module.css';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { IMatchParams } from 'common/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewsRequest } from 'redux/actions/movies-actions';
import { selectRootReviews } from 'redux/selectors';

function Reviews() {
  const dispatch = useDispatch();
  const match: IMatchParams = useRouteMatch();

  const reviews = useSelector(selectRootReviews);

  useEffect(() => {
    const { movieId } = match.params;

    dispatch(fetchReviewsRequest(movieId));
  }, [dispatch, match.params]);

  return reviews.length ? (
    <ul className={`${s.list} list`}>
      {reviews.map(({ id, author, content }) => {
        return (
          <li className={s.item} key={id}>
            <h4 className={s.title}>{`Author: ${author}`}</h4>
            <p className={s.text}>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}

export default Reviews;
