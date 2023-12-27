import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'pages/SharedStyles';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  return (
    <Container>
      <SearchForm setMovies={setMovies} />
      <hr />
      <MovieList movies={movies} location={location} />
    </Container>
  );
};

export default Movies;
