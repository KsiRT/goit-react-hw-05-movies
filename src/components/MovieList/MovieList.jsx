import React from 'react';
import { MovieItem, MoviesList } from './MovieListStyled';
import { Link } from 'react-router-dom';
import defaultMovieImg from '../../images/video-camera.png';

const MovieList = ({ movies, location }) => {
  return (
    <MoviesList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <Link
            state={{ from: location }}
            to={`/movies/${movie.id.toString()}`}
          >
            <img
              src={movie.poster ? movie.poster : defaultMovieImg}
              alt={`${movie.title} poster`}
              width={200}
            />
            <p>{movie.title}</p>
          </Link>
        </MovieItem>
      ))}
    </MoviesList>
  );
};

export default MovieList;
