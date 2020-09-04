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
