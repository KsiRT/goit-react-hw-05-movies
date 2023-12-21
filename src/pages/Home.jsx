import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopMovies().then(res => setMovies(res));
  }, []);
  return (
    <>
      <h1>Home</h1>;
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id.toString()}`}>
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                width={200}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
