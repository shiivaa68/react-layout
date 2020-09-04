import { ERROR, GET_SERIESPAGE, UPDATE_SERIESPAGE, LOADING,ERROR_AWARDS,GET_SERIESPAGE_AWARDS,UPDATE_SERIESPAGE_AWARDS,LOADING_AWARDS,GET_SERIESPAGE_FAVARITE,UPDATE_SERIESPAGE_FAVARITE,ERROR_FAVARITE_SERIES,LOADING_FAVARITE_SERIES,GET_SERIESPAGE_BOOKMARK,UPDATE_SERIESPAGE_BOOKMARK,LOADING_BOOKMARK_SERIES,ERROR_BOOKMARK_SERIES,ERROR_BOOKMARK_SERIES_DEL,LOADING_BOOKMARK_SERIES_DEL,UPDATE_SERIESPAGE_BOOKMARK_DEL,GET_SERIESPAGE_BOOKMARK_DEL } from './constants';

export function loadingAction(loadingstatus) {
  return {
    type: LOADING,
    payload: { loadingstatus },
  };
}

export function errorAction(error) {
  return {
    type: ERROR,
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

//AWARDS

export function loadingAwardsAction(loadingstatus) {
  return {
    type: LOADING_AWARDS,
    payload: { loadingstatus },
  };
}

export function errorAwardsAction(error) {
  return {
    type: ERROR,
    payload: { error },
  };
}

export function getSeriesAwardsAction({ ...options }) {
  return {
    type: GET_SERIESPAGE_AWARDS,
    payload: { ...options },
  };
}

export function updateSeriesAwardsAction(data) {
  return {
    type: UPDATE_SERIESPAGE_AWARDS,
    payload: data,
  };
}


//FAVARITE

export function loadingFavariteAction(loadingstatus) {
  return {
    type: LOADING_FAVARITE_SERIES,
    payload: { loadingstatus },
  };
}

export function errorFavariteAction(error) {
  return {
    type: ERROR_FAVARITE_SERIES,
    payload: { error },
  };
}

export function getSeriesFavariteAction({ ...options }) {
  return {
    type: GET_SERIESPAGE_FAVARITE,
    payload: { ...options },
  };
}

export function updateSeriesFavariteAction(data) {
  return {
    type: UPDATE_SERIESPAGE_FAVARITE,
    payload: data,
  };
}
//bookmark
export function loadingBookmarkAction(loadingstatus) {
  return {
    type: LOADING_BOOKMARK_SERIES,
    payload: { loadingstatus },
  };
}

export function errorBookmarkAction(error) {
  return {
    type: ERROR_BOOKMARK_SERIES,
    payload: { error },
  };
}

export function getSeriesBookmarkAction({ ...options }) {
  return {
    type: GET_SERIESPAGE_BOOKMARK,
    payload: { ...options },
  };
}

export function updateSeriesBookmarkAction(data) {
  return {
    type: UPDATE_SERIESPAGE_BOOKMARK,
    payload: data,
  };
}

//del bookmark
export function loadingBookmarkDelAction(loadingstatus) {
  return {
    type: LOADING_BOOKMARK_SERIES_DEL,
    payload: { loadingstatus },
  };
}

export function errorBookmarkDelAction(error) {
  return {
    type: ERROR_BOOKMARK_SERIES_DEL,
    payload: { error },
  };
}

export function getSeriesBookmarkDelAction({ ...options }) {
  return {
    type: GET_SERIESPAGE_BOOKMARK_DEL,
    payload: { ...options },
  };
}

export function updateSeriesBookmarkDelAction(data) {
  return {
    type: UPDATE_SERIESPAGE_BOOKMARK_DEL,
    payload: data,
  };
}