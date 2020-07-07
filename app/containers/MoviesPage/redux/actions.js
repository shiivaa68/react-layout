import { ERROR, GET_MOVIEPAGE, UPDATE_MOVIEPAGE, LOADING } from './constants';

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
