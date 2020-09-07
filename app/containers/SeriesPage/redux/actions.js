import {
  ERROR,
  GET_SERIESPAGE,
  UPDATE_SERIESPAGE,
  LOADING,
  ERROR_AWARDS,
  GET_SERIESPAGE_AWARDS,
  UPDATE_SERIESPAGE_AWARDS,
  LOADING_AWARDS,

  ERROR_SERIES_RANK,
  LOADING_SERIES_RANK,
  UPDATE_SERIES_RANK,
  UPDATE_SERIES_RANK_REDUCER,

  GET_SERIESPAGE_BOOKMARK,
  UPDATE_SERIESPAGE_BOOKMARK,
  LOADING_BOOKMARK_SERIES,
  ERROR_BOOKMARK_SERIES,
  
  ERROR_BOOKMARK_SERIES_DEL,
  LOADING_BOOKMARK_SERIES_DEL,
  UPDATE_SERIESPAGE_BOOKMARK_DEL,
  GET_SERIESPAGE_BOOKMARK_DEL,

  ERROR_SERIE_COMMENT,
  LOADING_SERIE_COMMENT,UPDATE_COMMENT_SERIE,GET_COMMENT_SERIE,
  ERROR_SERIES_COMMENT_SEND,LOADING_SERIES_COMMENT_SEND,SET_COMMENT_SERIES,UPDATE_COMMENT_SERIES_SEND,

  ERROR_SERIES_LIKE,LOADING_SERIES_LIKE,SET_SERIES_LIKE,UPDATE_SERIES_LIKE,
} from './constants';

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

export function loadingRankAction(loadingstatus) {
  return {
    type: LOADING_SERIES_RANK,
    payload: { loadingstatus },
  };
}

export function errorRankAction(error) {
  return {
    type: ERROR_SERIES_RANK,
    payload: { error },
  };
}

export function updateSeriesRankAction(data) {
  return {
    type: UPDATE_SERIES_RANK,
    payload:data,
  };
}

export function updateSeriesRankReducerAction(data) {
  return {
    type: UPDATE_SERIES_RANK_REDUCER,
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


//COMMENT SERIES
export function loadingCommentAction(loadingStatus) {
  return {
    type: LOADING_SERIE_COMMENT,
    payload: { loadingStatus },
  };
}

export function errorCommentAction(error) {
  return {
    type: ERROR_SERIE_COMMENT,
    payload: { error },
  };
}

export function getCommentSeriesAction({ ...options }) {
  return {
    type: GET_COMMENT_SERIE,
    payload: { ...options },
  };
}

export function updateCommentSeriesAction(data) {
  return {
    type: UPDATE_COMMENT_SERIE,
    payload: data,
  };
}

//SET COMMENT
export function loadingSetCommentAction(loadingStatus) {
  return {
    type: LOADING_SERIES_COMMENT_SEND,
    payload: { loadingStatus },
  };
}

export function errorSetCommentAction(error) {
  return {
    type: ERROR_SERIES_COMMENT_SEND,
    payload: { error },
  };
}

export function setCommentSeriesAction({ ...options }) {
  return {
    type: SET_COMMENT_SERIES,
    payload: { ...options },
  };
}

export function updateSetCommentSeriesAction(data) {
  return {
    type: UPDATE_COMMENT_SERIES_SEND,
    payload: data,
  };
}

//LIKE

export function loadingLikeAction(loadingstatus) {
  return {
    type: LOADING_SERIES_LIKE,
    payload: { loadingstatus },
  };
}

export function errorLikeAction(error) {
  return {
    type: ERROR_SERIES_LIKE,
    payload: { error },
  };
}

export function setSeriesLikeAction(data) {
  return {
    type: SET_SERIES_LIKE,
    payload:data,
  };
}

export function updateSeriesLikeAction(data) {
  return {
    type: UPDATE_SERIES_LIKE,
    payload: data,
  };
}