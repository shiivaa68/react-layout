import React, { useEffect } from 'react';
import HeadingCover from 'components/HeadingCover';
import MovieDetail from 'components/MovieDetail';
import Casts from 'components/Casts';
import Suggestions from 'components/Suggestions';
import Comments from 'components/Comments';

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
      <MovieDetail />
      <Casts casts={data.casts || []} />
      <Suggestions />
      <Comments />
      {/* 
      <h2>MOVIES_PAGE</h2>
      <h3>MOVIE ID:{match.params.movieId}</h3>
      <h3>title_fa: {data && data.title_fa}</h3> */}
    </MoviesContainer>
  );
};

export default MoviesPage;
