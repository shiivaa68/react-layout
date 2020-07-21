import { ERROR, LOADING, GET_SINGLEPAGE, UPDATE_SINGLEPAGE } from './constants';

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

export function getSinglePageAction({ ...options }) {
  return {
    type: GET_SINGLEPAGE,
    payload: { ...options },
  };
}

export function updateSinglePageAction(data) {
  return {
    type: UPDATE_SINGLEPAGE,
    payload: data,
  };
}
