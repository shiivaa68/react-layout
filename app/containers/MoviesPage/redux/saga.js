import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import {
  GET_MOVIEPAGE,
  GET_AWARD_MOVIEPAGE,
  UPDATE_MOVIE_RANK,
  GET_BOOKMARK_MOVIEPAGE,
  GET_BOOKMARK_MOVIEPAGE_DELET,
  GET_COMMENT_MOVIES,
  SET_COMMENT_MOVIES,
  SET_MOVIE_LIKE,
  SET_REPLY_COMMENT_MOVIES,
  GET_COMMENT_MOVIES_REPLY_MORE,
  GET_COMMENT_REPLY_LIKE,
} from './constants';
import {
  loadingAction,
  errorAction,
  updateMoviesAction,
  loadingAwardsAction,
  errorAwardsAction,
  updateMoviesAwardsAction,
  loadingMovieRankAction,
  errorMovieRankAction,
  updateMovieRankReducerAction,
  loadingBookmarkAction,
  updateMoviesBookmarkAction,
  errorDelBookmarkAction,
  loadingDelBookmarkAction,
  updateMoviesDelBookmarkAction,
  errorBookmarkAction,
  loadingCommentAction,
  updateCommentMoviesAction,
  errorCommentAction,
  loadingSetCommentAction,
  errorSetCommentAction,
  updateSetCommentMoviesAction,
  loadingMovieLikeAction,
  errorMovieLikeAction,
  updateMovieLikeAction,
  loadingSetReplyCommentAction,
  errorSetReplyCommentAction,
  updateSetReplyCommentMoviesAction,
  loadingCommentReplyMoreAction,
  errorCommentReplyMoreAction,
  updateCommentReplyMoreMoviesAction,

  // like reply
  loadingReplyLikeAction,
  errorReplyLikeAction,
  updateReplyLikeAction,
} from './actions';

function* getMoviesPageWorker({ payload: { id } }) {
  const url = apiEndpoints.getMoviesPage(id);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateMoviesAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getMoviesAwardsPageWorker({ payload: { movieId } }) {
  const url = apiEndpoints.getAwardsMoviesPage(movieId);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAwardsAction(loadingStatus),
    success: result => updateMoviesAwardsAction(result),
    failure: error => errorAwardsAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* updateMovieRankWorker({ payload: { movieId, rank } }) {
  const url = apiEndpoints.updateMovieRank(movieId, rank);
  const method = 'PUT';
  const actions = {
    loading: loadingStatus => loadingMovieRankAction(loadingStatus),
    success: result => updateMovieRankReducerAction({ ...result, rank }),
    failure: error => errorMovieRankAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getMoviesBookmarkWorker({ payload: { movieId } }) {
  const url = apiEndpoints.setBookmarkMovies(movieId);
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingBookmarkAction(loadingStatus),
    success: result => updateMoviesBookmarkAction(true),
    failure: error => errorBookmarkAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getMoviesBookmarkDelWorker({ payload: { movieId } }) {
  const url = apiEndpoints.deletBookmarkMovies(movieId);
  const method = 'DELETE';
  const actions = {
    loading: loadingStatus => loadingDelBookmarkAction(loadingStatus),
    success: result => updateMoviesDelBookmarkAction(false),
    failure: error => errorDelBookmarkAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getCommentMoviesWorker({ payload: { movieId, options } }) {
  const url = apiEndpoints.getCommentMovies(movieId, options);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingCommentAction(loadingStatus),
    success: result => updateCommentMoviesAction(result),
    failure: error => errorCommentAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* enterSetCommentWorker({ payload: { comment, movieId } }) {
  const method = 'POST';
  const url = apiEndpoints.sendComment(movieId);
  const actions = {
    loading: loadingStatus => loadingSetCommentAction(loadingStatus),
    success: result => updateSetCommentMoviesAction(result),
    // failure: error => errorSetCommentAction(error),
    failure: error => {
      console.log('ERROR', message);
      const { status, message } = error;
      return errorSetCommentAction(message);
    },
  };

  const data = {
    comment,
  };

  yield requestCall({ url, method, actions, data });
}

function* setMovieLikeWorker({ payload: { id, score } }) {
  const url = apiEndpoints.setMovieLike(id);
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingMovieLikeAction(loadingStatus),
    success: result =>
      updateMovieLikeAction({ ...result, commentId: id, score }),
    failure: error => errorMovieLikeAction(error),
  };

  const data = {
    score: String(score),
  };

  yield requestCall({ url, method, actions, data });
}

function* SetReplyCommentWorker({ payload: { comment, id } }) {
  const method = 'POST';
  const url = apiEndpoints.sendReplyComment(id);
  const actions = {
    loading: loadingStatus => loadingSetReplyCommentAction(loadingStatus),
    success: result => updateSetReplyCommentMoviesAction(result),
    // failure: error => errorSetCommentAction(error),
    failure: error => {
      console.log('ERROR', message);
      const { status, message } = error;
      return errorSetReplyCommentAction(message);
    },
  };

  const data = comment;

  yield requestCall({ url, method, actions, data });
}

//GET MORE REPLY COMMENT
function* getCommentReplyMoreMoviesWorker({ payload: { commentId, params } }) {
  const url = apiEndpoints.getCommentMoreReplyMovies(commentId, params);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingCommentReplyMoreAction(loadingStatus),
    success: result =>
      updateCommentReplyMoreMoviesAction({ commentId, result }),
    failure: error => errorCommentReplyMoreAction(error),
  };

  yield requestCall({ url, method, actions });
}

// reply comment
function* getCommentReplyLikeWorker({
  payload: { commentId, replyId, score },
}) {
  console.log('>>> saga', { commentId, replyId, score });
  const url = apiEndpoints.setMovieLike(replyId);
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingReplyLikeAction(loadingStatus),
    success: result =>
      updateReplyLikeAction({ ...result, commentId, replyId, score }),
    failure: error => errorReplyLikeAction(error),
  };

  const data = {
    score: String(score),
  };

  yield requestCall({ url, method, actions, data });
}

export default function* moviesPageSaga() {
  yield all([
    takeLatest(GET_MOVIEPAGE, getMoviesPageWorker),
    takeLatest(GET_AWARD_MOVIEPAGE, getMoviesAwardsPageWorker),
    takeLatest(UPDATE_MOVIE_RANK, updateMovieRankWorker),
    takeLatest(GET_BOOKMARK_MOVIEPAGE, getMoviesBookmarkWorker),
    takeLatest(GET_BOOKMARK_MOVIEPAGE_DELET, getMoviesBookmarkDelWorker),
    takeLatest(GET_COMMENT_MOVIES, getCommentMoviesWorker),
    takeLatest(SET_COMMENT_MOVIES, enterSetCommentWorker),
    takeLatest(SET_MOVIE_LIKE, setMovieLikeWorker),
    takeLatest(SET_REPLY_COMMENT_MOVIES, SetReplyCommentWorker),
    takeLatest(GET_COMMENT_MOVIES_REPLY_MORE, getCommentReplyMoreMoviesWorker),
    takeLatest(GET_COMMENT_REPLY_LIKE, getCommentReplyLikeWorker),
  ]);
}
