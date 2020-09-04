import { ERROR, LOADING, GET_COMMENT_MOVIES,UPDATE_COMMENT_MOVIES } from './constants';

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