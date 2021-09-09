import s from "./Reviews.module.css";
import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";

import axios from "axios";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const { movieId } = match.params;

    async function fetch() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cac5c08a938bff767b15f4beaa543e5a&language=en-US`
      );

      setReviews([...response.data.results]);
    }

    fetch();
  }, [match.params]);

  return reviews ? (
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
