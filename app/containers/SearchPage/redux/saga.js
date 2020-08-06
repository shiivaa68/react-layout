import { all, takeLatest } from 'redux-saga/effects';
import { apiEndpoints } from 'utils/api';
import requestCall from 'utils/redux/requestCall';

import {
  GET_MOVIES_SEARCHPAGE,
  GET_SERIES_SEARCHPAGE,
  GET_CASTS_SEARCHPAGE,
} from './constants';
import {
  loadingMoviesAction,
  loadingSeriesAction,
  loadingCastsAction,
  errorMoviesAction,
  errorSeriesAction,
  errorCastsAction,
  updateMovieSearchPageAction,
  updateSeriesSearchPageAction,
  updateCastsSearchPageAction,
} from './actions';

// saga movies
function* getMovieSearchPageWorker({ payload: { searchConfig } }) {
  // console.log(searchConfig);
  const url = apiEndpoints.getMoviesSearch(searchConfig);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingMoviesAction(loadingStatus),
    success: result => updateMovieSearchPageAction(result),
    failure: error => errorMoviesAction(error),
  };

  yield requestCall({ url, method, actions });
}

//saga series

function* getSeriesSearchPageWorker({ payload: { searchConfig } }) {
  // console.log(searchConfig);
  const url = apiEndpoints.getSeriesSearch(searchConfig);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingSeriesAction(loadingStatus),
    success: result => updateSeriesSearchPageAction(result),
    failure: error => errorSeriesAction(error),
  };

  yield requestCall({ url, method, actions });
}

// saga casts

function* getCastsSearchPageWorker({ payload: { searchConfig } }) {
  // console.log(searchConfig);
  const url = apiEndpoints.getCastsSearch(searchConfig);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingCastsAction(loadingStatus),
    success: result => updateCastsSearchPageAction(result),
    failure: error => errorCastsAction(error),
  };

  yield requestCall({ url, method, actions });
}

// Root Saga
export default function* SearchPageSaga() {
  yield all([
    takeLatest(GET_MOVIES_SEARCHPAGE, getMovieSearchPageWorker),
    takeLatest(GET_SERIES_SEARCHPAGE, getSeriesSearchPageWorker),
    takeLatest(GET_CASTS_SEARCHPAGE, getCastsSearchPageWorker),
  ]);
}
