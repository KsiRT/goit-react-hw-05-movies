import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { Actor, CastList, ImageWrapper } from './CastStyled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultCastImg =
    'https://community.adobe.com/legacyfs/online/avatars/a829412_stormtrooper_001.png';

  useEffect(() => {
    fetchCast(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err.message));
  }, [movieId]);
  return (
    <>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ name, character, photo, id }) => (
            <Actor key={id}>
              <ImageWrapper>
                <img src={photo ? photo : defaultCastImg} alt={name} />
              </ImageWrapper>
              <h3>{name}</h3>
              <p>({character})</p>
            </Actor>
          ))}
        </CastList>
      ) : (
        <p>Sorry, we don't have information about cast</p>
      )}
    </>
  );
};

export default Cast;
