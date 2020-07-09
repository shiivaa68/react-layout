import React from 'react';
import {
  container,
  CastWrapper,
  Image,
  DescriptionCast,
  Title,
  Role,
} from './style';

const Casts = ({ casts }) => (
  <CastWrapper>
    {casts &&
      casts.length > 0 &&
      casts.map(cast => (
        <container>
          <Image>
            <img src={cast.profile_picture} />
          </Image>
          <DescriptionCast>
            <Title>{cast.fullname_fa}</Title>
            <Role>role</Role>
          </DescriptionCast>
        </container>
      ))}
  </CastWrapper>
);

export default Casts;