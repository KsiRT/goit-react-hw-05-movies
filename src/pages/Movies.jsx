import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'pages/SharedStyles';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  return (
    <Container>
      <SearchForm
        setParams={setSearchParams}
        searchParams={searchParams}
        setMovies={setMovies}
      />
      <hr />
      <MovieList movies={movies} location={location} />
    </Container>
  );
};

export default Movies;
