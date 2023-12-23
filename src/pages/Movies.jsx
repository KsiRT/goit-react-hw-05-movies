import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery, fetchPopMovies } from 'services/api';
import defaultMovieImg from '../images/video-camera.png';
import {
  Container,
  DefaultBtn,
  MovieItem,
  MoviesList,
  SearchInput,
  StyledSearch,
  Title,
} from 'pages/SharedStyles';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    query
      ? fetchMoviesByQuery(query.trim()).then(res => setMovies(res))
      : fetchPopMovies().then(res => setMovies(res));
  }, [query]);

  const location = useLocation();

  return (
    <Container>
      <StyledSearch>
        <Title>Look for movie : </Title>
        <SearchInput
          value={query}
          onChange={e =>
            setSearchParams(e.target.value ? { query: e.target.value } : {})
          }
          type="text"
          placeholder="Search..."
        />
        <DefaultBtn>Let`s find</DefaultBtn>
      </StyledSearch>
      <hr />
      <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link state={{ from: location }} to={`${movie.id.toString()}`}>
              {movie.poster ? (
                <img
                  src={movie?.poster}
                  alt={`${movie.title} poster`}
                  width={200}
                />
              ) : (
                <img src={defaultMovieImg} alt="No poster" width={200} />
              )}

              <p>{movie.title}</p>
            </Link>
          </MovieItem>
        ))}
      </MoviesList>
    </Container>
  );
};

export default Movies;
