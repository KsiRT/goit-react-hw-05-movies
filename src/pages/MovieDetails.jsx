import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);
  // console.log(movie);
  if (!movie) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <p>Rating: {movie.score}</p>
        <img src={movie.poster} alt="Movie poster" width={250} />
        <p>Overview: {movie.overview}</p>
      </div>
      <hr />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
