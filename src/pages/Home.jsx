import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPopMovies } from 'services/api';
import { Title } from './SharedStyles';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopMovies().then(res => setMovies(res));
  }, []);

  const location = useLocation();

  return (
    <>
      <Title>Popular today</Title>
      <MovieList movies={movies} location={location} />
    </>
  );
};

export default Home;
