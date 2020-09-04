import { useEffect, useCallback, useMemo } from 'react';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import MoviesPageReducer from './redux/reducer';
import moviesPageSaga from './redux/saga';
import {
  getMoviesAction,
  getMoviesAwardsAction,
  updateMovieRankAction,
  getMoviesDelBookmarkAction,
  getMoviesBookmarkAction,
} from './redux/actions';
import initialState from './redux/initialState';
import useMyMediaQuery from 'utils/useMyMediaQuery';

const MoviesPageKeyOnRedux = 'MoviesPage';

const MoviePageManager = ({ match }) => {
  useInjectReducer({ key: MoviesPageKeyOnRedux, reducer: MoviesPageReducer });
  useInjectSaga({ key: MoviesPageKeyOnRedux, saga: moviesPageSaga });

  const { isMobile } = useMyMediaQuery();

  const [
    getMoviesPage,
    getMoviesAwards,
    updateMovieRank,
    getMoviesDelBookmark,
    getMoviesBookmark,
  ] = useBindDispatch([
    getMoviesAction,
    getMoviesAwardsAction,
    updateMovieRankAction,
    getMoviesDelBookmarkAction,
    getMoviesBookmarkAction,
  ]);

  const {
    loading,
    error,
    data = [],
    data_movie,
    data_movie_favarite,
  } = useSelector(state => state[MoviesPageKeyOnRedux] || initialState);
  const { rols = [] } = useSelector(state => state.global);
  const { languages = [] } = useSelector(state => state.global);
  const { agerange = [] } = useSelector(state => state.global);
  const { genres = [] } = useSelector(state => state.global);
  const { country = [] } = useSelector(state => state.global);

  useEffect(() => {
    const movieId = match.params.movieId;

    getMoviesPage({ id: movieId });
    getMoviesAwards({ movieId });
    getMoviesBookmark({ movieId });
    getMoviesDelBookmark({ movieId });
  }, []);

  const handleMovieLikeDislike = useCallback((movieId, rank) => {
    console.log('handle LIke Dislike called', movieId, rank);
    updateMovieRank({ movieId, rank });
  }, []);

  return {
    data: {
      loading,
      error,
      data,
      data_movie,
      data_movie_favarite,
      isMobile,

      rols,
      languages,
      agerange,
      genres,
      country,
    },
    actions: {
      handleMovieLikeDislike,
    },
  };
};

export default MoviePageManager;
