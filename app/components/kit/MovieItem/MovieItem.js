import React from 'react';

import {
  MovieItemContainer,
  Image,
  DescriptionArea,
  Heading,
  SubHeading,
} from './styles';

const MovieItem = ({ poster_path, title_fa, subHeading, ...rest }) => (
  <MovieItemContainer>
    <Image>
      <img src={poster_path} />
    </Image>
    <DescriptionArea>
      <Heading>{title_fa}</Heading>
      <SubHeading>{subHeading}</SubHeading>
    </DescriptionArea>
  </MovieItemContainer>
);

export default MovieItem;
