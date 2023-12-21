import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { Actor, CastList, ImageWrapper } from './CastStyled';
import { RxAvatar } from 'react-icons/rx';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err.message));
  }, [movieId]);
  console.log(cast);
  return (
    <>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ name, character, photo, id }) => (
            <Actor key={id}>
              <ImageWrapper>
                {photo ? (
                  <img src={photo} alt={name} />
                ) : (
                  <RxAvatar size={100} color="#a1a1a1" />
                )}
              </ImageWrapper>
              <h3>{name}</h3>
              <p>({character})</p>
            </Actor>
          ))}
        </CastList>
      ) : null}
      {cast ? <p>Sorry, we don't have information about cast</p> : null}
    </>
  );
};

export default Cast;
