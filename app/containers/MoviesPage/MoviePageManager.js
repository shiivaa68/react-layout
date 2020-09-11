import { useState, useEffect, useCallback, useMemo } from 'react';

import { useSelector } from 'react-redux';
import globalConfigs from 'utils/globalConfigs';

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
  getCommentMoviesAction,
  setCommentMoviesAction,
  setMovieLikeAction,
  setReplyCommentMoviesAction,
  getCommentReplyMoreMoviesAction,
} from './redux/actions';
import initialState from './redux/initialState';
import useMyMediaQuery from 'utils/useMyMediaQuery';

const MoviesPageKeyOnRedux = 'MoviesPage';

const MoviePageManager = ({ match }) => {
  useInjectReducer({ key: MoviesPageKeyOnRedux, reducer: MoviesPageReducer });
  useInjectSaga({ key: MoviesPageKeyOnRedux, saga: moviesPageSaga });

  const { isMobile } = useMyMediaQuery();

  const [page, setPage] = useState(0);
  const [activeCommentIdForReply, setActiveCommentIdForReply] = useState(null);

  const [
    getMoviesPage,
    getMoviesAwards,
    updateMovieRank,
    getMoviesDelBookmark,
    getMoviesBookmark,
    getCommentMovies,
    setCommentMovies,
    setMovieLike,
    setReplyCommentMovies,
    getCommentReplyMoreMovies,
  ] = useBindDispatch([
    getMoviesAction,
    getMoviesAwardsAction,
    updateMovieRankAction,
    getMoviesDelBookmarkAction,
    getMoviesBookmarkAction,
    getCommentMoviesAction,
    setCommentMoviesAction,
    setMovieLikeAction,
    setReplyCommentMoviesAction,
    getCommentReplyMoreMoviesAction,
  ]);

  const {
    loading,
    error,
    data = [],
    data_movie,
    data_movie_favarite,
    comment_movie,
    error_comment,
    loading_send_comment,
    send_comment,
  } = useSelector(state => state[MoviesPageKeyOnRedux] || initialState);
  const { rols = [] } = useSelector(state => state.global);
  const { languages = [] } = useSelector(state => state.global);
  const { agerange = [] } = useSelector(state => state.global);
  const { genres = [] } = useSelector(state => state.global);
  const { country = [] } = useSelector(state => state.global);

  useEffect(() => {
    const movieId = match.params.movieId;
    const { pageLimit } = globalConfigs;

    const options = {
      limit: pageLimit,
    };
    getMoviesPage({ id: movieId });
    getMoviesAwards({ movieId });
    getMoviesBookmark({ movieId });
    getMoviesDelBookmark({ movieId });
    getCommentMovies({ movieId, options });
  }, []);

  // const getNextPage = useCallback(() => {
  //   const newPageIndex = page + 1;
  //   setPage(newPageIndex);
  //   const movieId = match.params.movieId;
  //   const { pageLimit } = globalConfigs;
  //   const options = {
  //     limit: pageLimit,
  //   };
  //   getCommentMovies({ pageLimit, page: newPageIndex, });

  // }, []);

  // const handleNextPage = useCallback(() => {
  //   const nextPageIndex = page + 1;
  //   getNextPage(nextPageIndex);
  // }, [page]);

  useEffect(() => {
    // console.log({ activeCommentIdForReply });
  }, [activeCommentIdForReply]);

  const handleMovieLikeDislike = useCallback((movieId, rank) => {
    updateMovieRank({ movieId, rank });
  }, []);

  const handleMovieSetBookmark = useCallback(movieId => {
    getMoviesBookmark({ movieId });
  }, []);

  const handleMovieDelBookmark = useCallback(movieId => {
    getMoviesDelBookmark({ movieId });
  }, []);

  /** Handlers */
  const handleSetComment = useCallback(({ comment }) => {
    const movieId = match.params.movieId;
    const { pageLimit } = globalConfigs;
    const options = {
      limit: pageLimit,
    };

    setCommentMovies({ comment, movieId });
    setTimeout(() => {
      getCommentMovies({ movieId, options });
    }, 1000);
  }, []);

  const handleMovieLikeComment = useCallback(({ score, id }) => {
    console.log({ score }, 'injaaa movie manager');
    setMovieLike({ id, score });
  }, []);

  const handleSetReplyComment = useCallback(
    ({ comment, activeCommentIdForReply }) => {
      console.log({ activeCommentIdForReply });
      const movieId = match.params.movieId;
      const { pageLimit } = globalConfigs;
      const options = {
        limit: pageLimit,
      };
      setReplyCommentMovies({ comment, id: activeCommentIdForReply });
      setTimeout(() => {
        getCommentMovies({ movieId, options });
      }, 1000);
    },
    [],
  );

  const handleActiveCommentForReply = useCallback(
    id => {
      setActiveCommentIdForReply(id);
    },
    [setActiveCommentIdForReply],
  );

  const handleLoadMoreReplyAPI = useCallback(({ commentId, replyPage }) => {
    let params = {
      page: replyPage,
    };
    getCommentReplyMoreMovies({ commentId, params });
  }, []);

  return {
    data: {
      loading,
      error,
      error_comment,
      loading_send_comment,
      data,
      data_movie,
      data_movie_favarite,
      isMobile,
      comment_movie,

      rols,
      languages,
      agerange,
      genres,
      country,
      activeCommentIdForReply,
    },
    actions: {
      handleMovieLikeDislike,
      handleMovieSetBookmark,
      handleMovieDelBookmark,
      handleSetComment,
      handleMovieLikeComment,
      handleSetReplyComment,
      handleActiveCommentForReply,
      handleLoadMoreReplyAPI,
    },
  };
};

export default MoviePageManager;
