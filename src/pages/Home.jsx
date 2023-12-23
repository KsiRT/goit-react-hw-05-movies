import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPopMovies } from 'services/api';
import { MovieItem, MoviesList, Title } from './SharedStyles';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopMovies().then(res => setMovies(res));
  }, []);

  const location = useLocation();

  return (
    <>
      <Title>Popular today</Title>
      <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link
              state={{ from: location }}
              to={`movies/${movie.id.toString()}`}
            >
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                width={200}
              />
              <p>{movie.title}</p>
            </Link>
          </MovieItem>
        ))}
      </MoviesList>
    </>
  );
};

export default Home;
