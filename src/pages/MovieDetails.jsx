import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieById(movieId)
      .then(res => setMovie(res))
      .catch(err => {
        console.log(err);
        if (err.response.status === 404) {
          navigate('/notFound');
        }
      });
  }, [movieId, navigate]);
  // console.log(movie);
  if (!movie) {
    return <h1>Loading ...</h1>;
  }

  const handleGoBack = () => {
    navigate('/movies');
  };
  return (
    <>
      <div>
        <button onClick={handleGoBack}>Go back</button>
        <h2>{movie.title}</h2>
        <p>Rating: {movie.score}</p>

        <img src={movie.poster} alt={`${movie.title} poster`} width={250} />

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
