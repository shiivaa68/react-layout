import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import {
  GET_SERIESPAGE,
  GET_SERIESPAGE_AWARDS,
  GET_SERIESPAGE_FAVARITE,
  GET_SERIESPAGE_BOOKMARK,
  GET_SERIESPAGE_BOOKMARK_DEL,
} from './constants';
import {
  loadingAction,
  errorAction,
  updateSeriesAction,
  loadingAwardsAction,
  errorAwardsAction,
  updateSeriesAwardsAction,
  loadingFavariteAction,
  errorFavariteAction,
  updateSeriesFavariteAction,
  updateSeriesBookmarkAction,
  errorBookmarkAction,
  updateSeriesBookmarkDelAction,
  errorBookmarkDelAction,
  loadingBookmarkAction,
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

function* getSeriesFavariteWorker({ payload: { serieId, favariteSeries } }) {
  const url = apiEndpoints.setFavariteMovies(serieId, favariteSeries);
  const method = 'PUT';
  const actions = {
    loading: loadingStatus => loadingFavariteAction(loadingStatus),
    success: result => updateSeriesFavariteAction(result),
    failure: error => errorFavariteAction(error),
  };

  yield requestCall({ url, method, actions });
}

//BOOKMARK

function* getSeriesBookmarkWorker({ payload: { serieId } }) {
  const url = apiEndpoints.setBookmarkSeries(serieId);
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingBookmarkAction(loadingStatus),
    success: result => updateSeriesBookmarkAction(result),
    failure: error => errorBookmarkAction(error),
  };

  yield requestCall({ url, method, actions });
}

//DELETE BOOKMARK

function* getSeriesBookmarkDelWorker({ payload: { serieId } }) {
  const url = apiEndpoints.deletBookmarkSeries(serieId);
  const method = 'DELETE';
  const actions = {
    loading: loadingStatus => loadingDelBookmarkAction(loadingStatus),
    success: result => updateSeriesBookmarkDelAction(result),
    failure: error => errorBookmarkDelAction(error),
  };

  yield requestCall({ url, method, actions });
}

export default function* seriesPageSaga() {
  yield all([takeLatest(GET_SERIESPAGE, getSeriesPageWorker)]);
  yield all([takeLatest(GET_SERIESPAGE_AWARDS, getSeriesAwardsPageWorker)]);
  yield all([takeLatest(GET_SERIESPAGE_FAVARITE, getSeriesFavariteWorker)]);

  yield all([takeLatest(GET_SERIESPAGE_BOOKMARK, getSeriesBookmarkWorker)]);
  yield all([
    takeLatest(GET_SERIESPAGE_BOOKMARK_DEL, getSeriesBookmarkDelWorker),
  ]);
}
