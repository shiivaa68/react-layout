import { ERROR, LOADING, GET_SUGGESTED_MOVIES, UPDATE_SUGGESTED_MOVIES } from './constants';

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

export function getSuggestedMoviesAction({ ...options }) {
  return {
    type: GET_SUGGESTED_MOVIES,
    payload: { ...options },
  };
}

export function updateSuggestedMoviesAction(data) {
  return {
    type: UPDATE_SUGGESTED_MOVIES,
    payload: data,
  };
}
