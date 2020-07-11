import React, { useEffect } from 'react';

import MovieSuggestions from 'containers/MovieSuggestions';
import HeadingCover from 'components/HeadingCover';
import MovieDetail from 'components/MovieDetail';
import Casts from 'components/Casts';
import Comments from 'components/Comments';
import ScreenShots from 'components/ScreenShots';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

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

  const { loading, error, data = [] } = useSelector(state => state[MoviesPageKeyOnRedux] || initialState);
  const { rols = [] } = useSelector(state => state.global);

  useEffect(() => {
    const id = match.params.movieId;
    getMoviesPage({ id });
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  // useEffect(() => {
  //   console.log({ rols });
  // }, [rols]);

  return (
    <MoviesContainer>
      <HeadingCover type="MOVIE" {...data} />
      <ScreenShots {...data} />
      <MovieDetail />
      <Casts casts={data.casts || []} rols={rols} />
      <MovieSuggestions movieId={match.params.movieId} />
      <Comments />
    </MoviesContainer>
  );
};

export default MoviesPage;
