import React from 'react';
import { Container, CastWrapper, Image, DescriptionCast, Title, Role } from './style';

const Casts = ({ casts }) => (
  <CastWrapper>
    {casts &&
      casts.length > 0 &&
      casts.map((cast, i) => (
        <Container key={i}>
          <Image>
            <img src={cast.profile_picture} />
          </Image>
          <DescriptionCast>
            <Title>{cast.fullname_fa}</Title>
            <Role>role</Role>
          </DescriptionCast>
        </Container>
      ))}
  </CastWrapper>
);

export default Casts;
