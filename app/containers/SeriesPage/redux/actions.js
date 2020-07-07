import { ERROR, GET_SERIESPAGE, UPDATE_SERIESPAGE, LOADING } from './constants';

export function loadingAction(loadingstatus) {
  return {
    type: LOADING,
    payload: { loadingstatus },
  };
}

export function errorAction(error) {
  return {
    type: error,
    payload: { error },
  };
}

export function getSeriesAction({ ...options }) {
  return {
    type: GET_SERIESPAGE,
    payload: { ...options },
  };
}

export function updateSeriesAction(data) {
  return {
    type: UPDATE_SERIESPAGE,
    payload: data,
  };
}
