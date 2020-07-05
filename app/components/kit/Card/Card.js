import React from 'react';
import { CardItemContainer } from './styles';

const Card = ({ children, hasShadow, hasRadius, hasBorder, ...restProps }) => {
  return <CardItemContainer>{children}</CardItemContainer>;
};

export default Card;
