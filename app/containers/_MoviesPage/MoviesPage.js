import React, { useEffect } from 'react';
import { MoviesContainer } from './styles';

const MoviesPage = ({ match }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <MoviesContainer>
      <h2>MOVIES_PAGE</h2>
      <h3>MOVIE ID:{match.params.movieId}</h3>
    </MoviesContainer>
  );
};

export default MoviesPage;
