import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { NoReviews, Review, ReviewsList } from './ReviewsStyled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews(movieId).then(res => {
      setReviews(res);
    });
  }, [movieId]);
  return (
    <>
      {reviews.length ? (
        <ReviewsList>
          {reviews.map(rev => (
            <Review key={rev.id}>
              <p>{rev.author}</p>
              <span>{rev.content}</span>
              <hr />
            </Review>
          ))}
        </ReviewsList>
      ) : (
        <NoReviews>There is no reviews on this movie yet</NoReviews>
      )}
    </>
  );
};

export default Reviews;
