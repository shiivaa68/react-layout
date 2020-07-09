import React, { useEffect } from 'react';

import HeadingCover from 'Components/HeadingCover';
import MovieDetail from 'Components/MovieDetail';
import Casts from 'Components/Casts';
import Suggestions from 'Components/Suggestions';
import Comments from 'Components/Comments';
import ScreenShots from 'Components/ScreenShots';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import { Container, Row, Col, Image } from 'react-bootstrap';
import MoviesPageReducer from './redux/reducer';
import moviesPageSaga from './redux/saga';
import { getMoviesAction } from './redux/actions';
import initialState from './redux/initialState';

import { MoviesContainer } from './styles';

const MoviesPageKeyOnRedux = 'MoviesPage';

const MoviesPage = ({ match }) => {
  useInjectReducer({ key: MoviesPageKeyOnRedux, reducer: MoviesPageReducer });
  useInjectSaga({ key: MoviesPageKeyOnRedux, saga: moviesPageSaga });

  const [getMoviesPage] = useBindDispatch([getMoviesAction]);

  const { loading, error, data = [] } = useSelector(
    state => state[MoviesPageKeyOnRedux] || initialState,
  );

  useEffect(() => {
    const id = match.params.movieId;
    getMoviesPage({ id });
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <MoviesContainer>
      <HeadingCover type="MOVIE" {...data} />
      <ScreenShots {...data} />
      <MovieDetail />
      <Casts casts={data.casts || []} />
      <Suggestions />
      <Comments />
    </MoviesContainer>
  );
};

export default MoviesPage;
