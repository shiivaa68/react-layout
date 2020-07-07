import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import SeriesPageReducer from './redux/reducer';
import seriesPageSaga from './redux/saga';
import { getSeriesAction } from './redux/actions';
import initialState from './redux/initialState';

import { SeriesContainer } from './styles';

const SeriesPageKeyOnRedux = 'SeriesPage';

const SeriesPage = ({ match }) => {
  useInjectReducer({ key: SeriesPageKeyOnRedux, reducer: SeriesPageReducer });
  useInjectSaga({ key: SeriesPageKeyOnRedux, saga: seriesPageSaga });

  const [getSeriesPage] = useBindDispatch([getSeriesAction]);

  const { loading, error, data = [] } = useSelector(
    state => state[SeriesPageKeyOnRedux] || initialState,
  );

  useEffect(() => {
    const id = match.params.serieId;
    getSeriesPage({ id });
  }, []);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <SeriesContainer>
      <h2>SERIES_PAGE</h2>
      <h3>SERIE ID: {match.params.serieId}</h3>
      <h3>hfdjfhdjh:{data && data.title_fa}</h3>
    </SeriesContainer>
  );
};

export default SeriesPage;
