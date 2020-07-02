import { ERROR, LOADING, GET_HOMEPAGE, UPDATE_HOMEPAGE } from './constants';

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

export function getHomePageAction({ ...options }) {
  return {
    type: GET_HOMEPAGE,
    payload: { ...options },
  };
}

export function updateHomePageAction(data) {
  return {
    type: UPDATE_HOMEPAGE,
    payload: data,
  };
}
