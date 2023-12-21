import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews(movieId).then(res => {
      // console.log(res);
      setReviews(res);
    });
  }, [movieId]);
  return (
    <>
      {
        <ul>
          {reviews.map(rev => (
            <li key={rev.id}>
              <p>{rev.author}</p>
              <span>{rev.content}</span>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Reviews;
