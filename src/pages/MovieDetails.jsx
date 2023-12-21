import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetchMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <h1>MovieDetails # {movieId}</h1>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.score}</p>
      <img src={movie.poster} alt="Movie poster" width={350} />
      <p>Overview: {movie.overview}</p>
      <hr />
    </>
  );
};

export default MovieDetails;
