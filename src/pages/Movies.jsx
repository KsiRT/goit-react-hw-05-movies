import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery, fetchPopMovies } from 'services/api';
import styled from 'styled-components';
import { BiCameraMovie } from 'react-icons/bi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  console.log(query);

  useEffect(() => {
    query
      ? fetchMoviesByQuery(query.trim()).then(res => setMovies(res))
      : fetchPopMovies().then(res => setMovies(res));
  }, [query]);

  // const filteredMovies = movies?.filter(movie =>
  //   movie.title.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <>
      <div>
        <StyledSearch>
          <h2>Movies</h2>
          <input
            value={query}
            onChange={e =>
              setSearchParams(e.target.value ? { query: e.target.value } : {})
            }
            type="text"
            placeholder="Search for movie"
          />
          <button>Find</button>
        </StyledSearch>
        <hr />
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id.toString()}`}>
                {movie.poster ? (
                  <img
                    src={movie?.poster}
                    alt={`${movie.title} poster`}
                    width={200}
                  />
                ) : (
                  <StyledPoster size={70} />
                )}

                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;

const StyledSearch = styled.div``;

export const StyledPoster = styled(BiCameraMovie)`
  width: 200px;
  height: 250px;
  background-color: #dddddd;
  text-decoration: none;
`;
