import {
  ERROR,
  GET_MOVIEPAGE,
  UPDATE_MOVIEPAGE,
  LOADING,
  ERROR_MOVIE,
  GET_AWARD_MOVIEPAGE,
  UPDATE_AWARD_MOVIEPAGE,
  LOADING_MOVIE,
  ERROR_MOVIE_RANK,
  LOADING_MOVIE_RANK,
  UPDATE_MOVIE_RANK,
  UPDATE_MOVIE_RANK_REDUCER,
  GET_BOOKMARK_MOVIEPAGE,
  UPDATE_BOOKMARK_MOVIEPAGE,
  ERROR_MOVIE_BOOKMARK,
  LOADING_MOVIE_BOOKMARK,
  ERROR_MOVIE_BOOKMARK_DELET,
  LOADING_MOVIE_BOOKMARK_DELET,
  UPDATE_BOOKMARK_MOVIEPAGE_DELET,
  GET_BOOKMARK_MOVIEPAGE_DELET,
  ERROR_MOVIE_COMMENT,
  LOADING_MOVIE_COMMENT,
  UPDATE_COMMENT_MOVIES,
  GET_COMMENT_MOVIES,
  ERROR_MOVIE_COMMENT_SEND,
  LOADING_MOVIE_COMMENT_SEND,
  SET_COMMENT_MOVIES,
  UPDATE_COMMENT_MOVIES_SEND,
  ERROR_MOVIE_LIKE,
  LOADING_MOVIE_LIKE,
  SET_MOVIE_LIKE,
  UPDATE_MOVIE_LIKE,
  ERROR_MOVIE_COMMENT_SEND_REPLY,
  LOADING_MOVIE_COMMENT_SEND_REPLY,
  SET_REPLY_COMMENT_MOVIES,
  UPDATE_COMMENT_MOVIES_SEND_REPLY,
  ERROR_MOVIE_COMMENT_REPLY_MORE,
  LOADING_MOVIE_COMMENT_REPLY_MORE,
  GET_COMMENT_MOVIES_REPLY_MORE,
  UPDATE_COMMENT_MOVIES_REPLY_MORE,

  // Reply Like
  ERROR_COMMENT_REPLY_LIKE,
  LOADING_COMMENT_REPLY_LIKE,
  GET_COMMENT_REPLY_LIKE,
  UPDATE_COMMENT_REPLY_LIKE,
} from './constants';

export function loadingAction(loadingStatus) {
  return {
    type: LOADING,
    payload: { loadingStatus },
  };
}

export function errorAction(error) {
  return {
    type: ERROR,
    payload: { error },
  };
}

export function getMoviesAction({ ...options }) {
  return {
    type: GET_MOVIEPAGE,
    payload: { ...options },
  };
}

export function updateMoviesAction(data) {
  return {
    type: UPDATE_MOVIEPAGE,
    payload: data,
  };
}
//AWARDS

export function loadingAwardsAction(loadingStatus) {
  return {
    type: LOADING_MOVIE,
    payload: { loadingStatus },
  };
}

export function errorAwardsAction(error) {
  return {
    type: ERROR_MOVIE,
    payload: { error },
  };
}

export function getMoviesAwardsAction({ ...options }) {
  return {
    type: GET_AWARD_MOVIEPAGE,
    payload: { ...options },
  };
}

export function updateMoviesAwardsAction(data) {
  return {
    type: UPDATE_AWARD_MOVIEPAGE,
    payload: data,
  };
}

//FAVARITE
export function loadingMovieRankAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_RANK,
    payload: { loadingStatus },
  };
}

export function errorMovieRankAction(error) {
  return {
    type: ERROR_MOVIE_RANK,
    payload: { error },
  };
}

export function updateMovieRankAction(data) {
  return {
    type: UPDATE_MOVIE_RANK,
    payload: data,
  };
}
export function updateMovieRankReducerAction(data) {
  return {
    type: UPDATE_MOVIE_RANK_REDUCER,
    payload: data,
  };
}

//BOOKMARK
export function loadingBookmarkAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_BOOKMARK,
    payload: { loadingStatus },
  };
}

export function errorBookmarkAction(error) {
  return {
    type: ERROR_MOVIE_BOOKMARK,
    payload: { error },
  };
}

export function getMoviesBookmarkAction({ ...options }) {
  return {
    type: GET_BOOKMARK_MOVIEPAGE,
    payload: { ...options },
  };
}

export function updateMoviesBookmarkAction(data) {
  return {
    type: UPDATE_BOOKMARK_MOVIEPAGE,
    payload: data,
  };
}
//DELETE BOOK MARK
export function loadingDelBookmarkAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_BOOKMARK_DELET,
    payload: { loadingStatus },
  };
}

export function errorDelBookmarkAction(error) {
  return {
    type: ERROR_MOVIE_BOOKMARK_DELET,
    payload: { error },
  };
}

export function getMoviesDelBookmarkAction({ ...options }) {
  return {
    type: GET_BOOKMARK_MOVIEPAGE_DELET,
    payload: { ...options },
  };
}

export function updateMoviesDelBookmarkAction(data) {
  return {
    type: UPDATE_BOOKMARK_MOVIEPAGE_DELET,
    payload: data,
  };
}

//COMMENT MOVIE
export function loadingCommentAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_COMMENT,
    payload: { loadingStatus },
  };
}

export function errorCommentAction(error) {
  return {
    type: ERROR_MOVIE_COMMENT,
    payload: { error },
  };
}

export function getCommentMoviesAction({ ...options }) {
  return {
    type: GET_COMMENT_MOVIES,
    payload: { ...options },
  };
}

export function updateCommentMoviesAction(data) {
  return {
    type: UPDATE_COMMENT_MOVIES,
    payload: data,
  };
}

//SET COMMENT
export function loadingSetCommentAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_COMMENT_SEND,
    payload: { loadingStatus },
  };
}

export function errorSetCommentAction(error) {
  return {
    type: ERROR_MOVIE_COMMENT_SEND,
    payload: { error },
  };
}

export function setCommentMoviesAction({ ...options }) {
  return {
    type: SET_COMMENT_MOVIES,
    payload: { ...options },
  };
}

export function updateSetCommentMoviesAction(data) {
  return {
    type: UPDATE_COMMENT_MOVIES_SEND,
    payload: data,
  };
}

//LIKE
export function loadingMovieLikeAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_LIKE,
    payload: { loadingStatus },
  };
}

export function errorMovieLikeAction(error) {
  return {
    type: ERROR_MOVIE_LIKE,
    payload: { error },
  };
}

export function setMovieLikeAction(data) {
  return {
    type: SET_MOVIE_LIKE,
    payload: data,
  };
}
export function updateMovieLikeAction(data) {
  return {
    type: UPDATE_MOVIE_LIKE,
    payload: data,
  };
}

//SET  REPLY COMMENT
export function loadingSetReplyCommentAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_COMMENT_SEND_REPLY,
    payload: { loadingStatus },
  };
}

export function errorSetReplyCommentAction(error) {
  return {
    type: ERROR_MOVIE_COMMENT_SEND_REPLY,
    payload: { error },
  };
}

export function setReplyCommentMoviesAction({ ...options }) {
  return {
    type: SET_REPLY_COMMENT_MOVIES,
    payload: { ...options },
  };
}

export function updateSetReplyCommentMoviesAction(data) {
  return {
    type: UPDATE_COMMENT_MOVIES_SEND_REPLY,
    payload: data,
  };
}

//REPLY -COMMNET -MORE THAN 10

export function loadingCommentReplyMoreAction(loadingStatus) {
  return {
    type: LOADING_MOVIE_COMMENT_REPLY_MORE,
    payload: { loadingStatus },
  };
}

export function errorCommentReplyMoreAction(error) {
  return {
    type: ERROR_MOVIE_COMMENT_REPLY_MORE,
    payload: { error },
  };
}

export function getCommentReplyMoreMoviesAction({ ...options }) {
  return {
    type: GET_COMMENT_MOVIES_REPLY_MORE,
    payload: { ...options },
  };
}

export function updateCommentReplyMoreMoviesAction(data) {
  return {
    type: UPDATE_COMMENT_MOVIES_REPLY_MORE,
    payload: data,
  };
}

// Reply Like
export function loadingReplyLikeAction(loadingStatus) {
  return {
    type: LOADING_COMMENT_REPLY_LIKE,
    payload: { loadingStatus },
  };
}

export function errorReplyLikeAction(error) {
  return {
    type: ERROR_COMMENT_REPLY_LIKE,
    payload: { error },
  };
}

export function setReplyLikeAction(data) {
  return {
    type: GET_COMMENT_REPLY_LIKE,
    payload: data,
  };
}
export function updateReplyLikeAction(data) {
  return {
    type: UPDATE_COMMENT_REPLY_LIKE,
    payload: data,
  };
}
