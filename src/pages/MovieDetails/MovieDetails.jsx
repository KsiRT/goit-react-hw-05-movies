import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import defaultMovieImg from '../../images/video-camera.png';
import { Links, StyledOutlet, Wrapper } from './MovieDetailsStyled';
import { Container, DefaultBtn, Title } from 'pages/SharedStyles';

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

  const location = useLocation();
  const goBackRef = useRef(location.state?.from);
  // console.log(movie);

  const handleGoBack = () => {
    navigate(goBackRef.current || '/movies');
  };

  if (!movie) {
    return <Title>Loading ...</Title>;
  }

  return (
    <Container>
      <DefaultBtn onClick={handleGoBack}>Go back</DefaultBtn>
      <Wrapper>
        {movie.poster ? (
          <img src={movie.poster} alt={`${movie.title} poster`} width={250} />
        ) : (
          <img src={defaultMovieImg} alt="No poster" width={250} />
        )}
        <div>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.score}%</p>
          <p>Overview: {movie.overview}</p>
        </div>
      </Wrapper>
      <hr />
      <Links>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </Links>
      <StyledOutlet>
        <Suspense fallback={<Title> Loading...</Title>}>
          <Outlet />
        </Suspense>
      </StyledOutlet>
    </Container>
  );
};

export default MovieDetails;
