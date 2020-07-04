import React, { useEffect } from 'react';
import { SeriesContainer } from './styles';

const SeriesPage = ({ match }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <SeriesContainer>
      <h2>SERIES_PAGE</h2>
      <h3>SERIE ID: {match.params.serieId}</h3>
    </SeriesContainer>
  );
};

export default SeriesPage;
