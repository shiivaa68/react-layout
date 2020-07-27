import {
  ERROR_CASTS,
  ERROR_MOVIES,
  ERROR_SERIES,
  LOADING_CASTS,
  LOADING_MOVIES,
  LOADING_SERIES,
  GET_CASTS_SEARCHPAGE,
  GET_MOVIES_SEARCHPAGE,
  GET_SERIES_SEARCHPAGE,
  UPADTE_CASTS_SEARCHPAGE,
  UPDATE_MOVIES_SEARCHPAGE,
  UPDATE_SERIES_SEARCHPAGE,
} from './constants';

//movies actions
export function loadingMoviesAction(loadingStatus) {
  return {
    type: LOADING_MOVIES,
    payload: { loadingStatus },
  };
}

export function errorMoviesAction(error) {
  return {
    type: ERROR_MOVIES,
    payload: { error },
  };
}

export function getMovieSearchPageAction({ ...options }) {
  return {
    type: GET_MOVIES_SEARCHPAGE,
    payload: { ...options },
  };
}

export function updateMovieSearchPageAction(data) {
  return {
    type: UPDATE_MOVIES_SEARCHPAGE,
    payload: data,
  };
}

//series actions
export function loadingSeriesAction(loadingStatus) {
  return {
    type: LOADING_SERIES,
    payload: loadingStatus,
  };
}

export function errorSeriesAction(error) {
  return {
    type: ERROR_SERIES,
    payload: { error },
  };
}

export function getSeriesSearchPageAction({ ...options }) {
  return {
    type: GET_SERIES_SEARCHPAGE,
    payload: { ...options },
  };
}

export function updateSeriesSearchPageAction(data) {
  return {
    type: UPDATE_SERIES_SEARCHPAGE,
    payload: data,
  };
}

// casts actions
export function loadingCastsAction(loadingStatus) {
  return {
    type: LOADING_CASTS,
    payload: { loadingStatus },
  };
}

export function errorCastsAction(error) {
  return {
    type: ERROR_CASTS,
    payload: { error },
  };
}

export function getCastsSearchPageAction({ ...options }) {
  return {
    type: GET_CASTS_SEARCHPAGE,
    payload: { ...options },
  };
}

export function updateCastsSearchPageAction(data) {
  return {
    type: UPADTE_CASTS_SEARCHPAGE,
    payload: data,
  };
}
