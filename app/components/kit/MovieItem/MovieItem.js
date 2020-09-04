import React from 'react';

import {
  MovieItemContainer,
  Image,
  DescriptionArea,
  Heading,
  SubHeading,
  MyLink,
} from './styles';
import Img from 'react-cool-img';
import { withRouter, Link } from 'react-router-dom';
import { useCallback } from 'react';
import { PublicRoutes } from 'utils/routes';

const MovieItem = ({ poster_path, history, title_fa, subHeading,type,clickable, ...rest }) => {
  const callPageSingle = useCallback(() => {
    const tp = type ? type : rest.is_series ? 'SERIES' : 'MOVIE';
    switch (tp) {
      case 'MOVIE':
        return PublicRoutes.movieDetailRoute(rest.id);
      case 'SERIES':
        return PublicRoutes.seriesDetailRoute(rest.id);
      default:
        return '#';
    }
  }, []);
    return <MyLink to={clickable ? callPageSingle() : '#'}>
      <MovieItemContainer >
    <Image clickable>
      <Img src={poster_path}  />
    </Image>
    <DescriptionArea clickable>
      <Heading>{title_fa}</Heading>
      <SubHeading>{subHeading}</SubHeading>
    </DescriptionArea>
  </MovieItemContainer>
    </MyLink> }
;

export default withRouter(MovieItem);
