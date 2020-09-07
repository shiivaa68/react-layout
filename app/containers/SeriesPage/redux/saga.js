import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import {
  GET_SERIESPAGE,
  GET_SERIESPAGE_AWARDS,
   UPDATE_SERIES_RANK,
  GET_SERIESPAGE_BOOKMARK,
  GET_SERIESPAGE_BOOKMARK_DEL,
  GET_COMMENT_SERIE,
  SET_COMMENT_SERIES,
  SET_SERIES_LIKE,
} from './constants';
import {
  loadingAction,
  errorAction,
  updateSeriesAction,
  loadingAwardsAction,
  errorAwardsAction,
  updateSeriesAwardsAction,
 loadingRankAction,
 errorRankAction,
 updateSeriesRankReducerAction,
 loadingBookmarkDelAction,
  updateSeriesBookmarkAction,
  errorBookmarkAction,
  updateSeriesBookmarkDelAction,
  errorBookmarkDelAction,
  loadingBookmarkAction,
  loadingCommentAction,
  updateCommentSeriesAction,
  errorCommentAction,
  errorSetCommentAction,updateSetCommentSeriesAction,loadingSetCommentAction,
  errorLikeAction,loadingLikeAction,updateSeriesLikeAction,
} from './actions';

function* getSeriesPageWorker({ payload: { id } }) {
  const url = apiEndpoints.getSeriesPage(id);
  const method = 'GET';
  const actions = {
    laoding: loadingStatus => loadingAction(loadingStatus),
    success: result => updateSeriesAction(result),
    failure: error => errorAction(error),
  };
  yield requestCall({ url, method, actions });
}

function* getSeriesAwardsPageWorker({ payload: { serieId } }) {
  const url = apiEndpoints.getAwardsSeriesPage(serieId);
  const method = 'GET';
  const actions = {
    laoding: loadingStatus => loadingAwardsAction(loadingStatus),
    success: result => updateSeriesAwardsAction(result),
    failure: error => errorAwardsAction(error),
  };
  yield requestCall({ url, method, actions });
}

function* getSeriesRankWorker({ payload: { serieId, rank } }) {
  const url = apiEndpoints.updateSeriesRank(serieId, rank);
  const method = 'PUT';
  const actions = {
    loading: loadingStatus => loadingRankAction(loadingStatus),
    success: result => updateSeriesRankReducerAction({ ...result, rank }),
    failure: error => errorRankAction(error),
  };

  yield requestCall({ url, method, actions });
}

//BOOKMARK

function* getSeriesBookmarkWorker({ payload: { serieId } }) {
  const url = apiEndpoints.setBookmarkSeries(serieId);
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingBookmarkAction(loadingStatus),
    success: result => updateSeriesBookmarkAction(true),
    failure: error => errorBookmarkAction(error),
  };

  yield requestCall({ url, method, actions });
}

//DELETE BOOKMARK

function* getSeriesBookmarkDelWorker({ payload: { serieId } }) {
  const url = apiEndpoints.deletBookmarkSeries(serieId);
  const method = 'DELETE';
  const actions = {
    loading: loadingStatus => loadingBookmarkDelAction(loadingStatus),
    success: result => updateSeriesBookmarkDelAction(false),
    failure: error => errorBookmarkDelAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getCommentSeriesWorker({ payload: { serieId, options } }) {
  const url = apiEndpoints.getCommentSeries(serieId, options);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingCommentAction(loadingStatus),
    success: result => updateCommentSeriesAction(result),
    failure: error => errorCommentAction(error),
  };

  yield requestCall({ url, method, actions });
}

//SET COOMENT
function* enterSetCommentWorker({ payload: { comment,serieId } }) {
  const method = 'POST';
  const url = apiEndpoints.sendCommentSeries(serieId);
  const actions = {
    loading: loadingStatus => loadingSetCommentAction(loadingStatus),
    success: result => updateSetCommentSeriesAction(result),
    // failure: error => errorSetCommentAction(error),
    failure: error => {
      console.log('ERROR', message);
      const { status, message } = error;
      return errorSetCommentAction(message);
    },
  };

  const data = {
     comment,
  };

  yield requestCall({ url, method, actions, data });
}

//like

function* setSeriesLikeWorker({ payload: { id,score } }) {
  const method = 'POST';
  const url = apiEndpoints.setSeriesLike(id);
  const actions = {
    loading: loadingStatus => loadingLikeAction(loadingStatus),
    success: result => updateSeriesLikeAction({ ...result, score }),
    failure: error => errorLikeAction(error),
    // failure: error => {
    //   console.log('ERROR', message);
    //   const { status, message } = error;
    //   return errorSetCommentAction(message);
    // },
  };

  const data = {
    score,
  };

  yield requestCall({ url, method, actions, data });
}



export default function* seriesPageSaga() {
  yield all([takeLatest(GET_SERIESPAGE, getSeriesPageWorker)]);
  yield all([takeLatest(GET_SERIESPAGE_AWARDS, getSeriesAwardsPageWorker)]);
  yield all([takeLatest(UPDATE_SERIES_RANK, getSeriesRankWorker)]);

  yield all([takeLatest(GET_SERIESPAGE_BOOKMARK, getSeriesBookmarkWorker)]);
  yield all([
    takeLatest(GET_SERIESPAGE_BOOKMARK_DEL, getSeriesBookmarkDelWorker),
  ]);
  yield all([
    takeLatest(GET_COMMENT_SERIE, getCommentSeriesWorker),
  ]);
  yield all([
    takeLatest(SET_COMMENT_SERIES, enterSetCommentWorker),
  ]);

  yield all([
    takeLatest(SET_SERIES_LIKE, setSeriesLikeWorker),
  ]);
}
