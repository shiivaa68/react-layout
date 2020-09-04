import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import {
  GET_MOVIEPAGE,
  GET_AWARD_MOVIEPAGE,
  UPDATE_MOVIE_RANK,
  GET_BOOKMARK_MOVIEPAGE,
  GET_BOOKMARK_MOVIEPAGE_DELET,
} from './constants';
import {
  loadingAction,
  errorAction,
  updateMoviesAction,
  loadingAwardsAction,
  errorAwardsAction,
  updateMoviesAwardsAction,
  loadingMovieRankAction,
  errorMovieRankAction,
  updateMovieRankReducerAction,
  loadingBookmarkAction,
  updateMoviesBookmarkAction,
  errorDelBookmarkAction,
  loadingDelBookmarkAction,
  updateMoviesDelBookmarkAction,
  errorBookmarkAction,
} from './actions';

function* getMoviesPageWorker({ payload: { id } }) {
  const url = apiEndpoints.getMoviesPage(id);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateMoviesAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getMoviesAwardsPageWorker({ payload: { movieId } }) {
  const url = apiEndpoints.getAwardsMoviesPage(movieId);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAwardsAction(loadingStatus),
    success: result => updateMoviesAwardsAction(result),
    failure: error => errorAwardsAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* updateMovieRankWorker({ payload: { movieId, rank } }) {
  const url = apiEndpoints.updateMovieRank(movieId, rank);
  const method = 'PUT';
  const actions = {
    loading: loadingStatus => loadingMovieRankAction(loadingStatus),
    success: result => updateMovieRankReducerAction({ ...result, rank }),
    failure: error => errorMovieRankAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getMoviesBookmarkWorker({ payload: { movieId } }) {
  const url = apiEndpoints.setBookmarkMovies(movieId);
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingBookmarkAction(loadingStatus),
    success: result => updateMoviesBookmarkAction(result),
    failure: error => errorBookmarkAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getMoviesBookmarkDelWorker({ payload: { movieId } }) {
  const url = apiEndpoints.deletBookmarkMovies(movieId);
  const method = 'DELETE';
  const actions = {
    loading: loadingStatus => loadingDelBookmarkAction(loadingStatus),
    success: result => updateMoviesDelBookmarkAction(result),
    failure: error => errorDelBookmarkAction(error),
  };

  yield requestCall({ url, method, actions });
}

export default function* moviesPageSaga() {
  yield all([takeLatest(GET_MOVIEPAGE, getMoviesPageWorker)]);
  yield all([takeLatest(GET_AWARD_MOVIEPAGE, getMoviesAwardsPageWorker)]);
  yield all([takeLatest(UPDATE_MOVIE_RANK, updateMovieRankWorker)]);
  yield all([takeLatest(GET_BOOKMARK_MOVIEPAGE, getMoviesBookmarkWorker)]);
  yield all([
    takeLatest(GET_BOOKMARK_MOVIEPAGE_DELET, getMoviesBookmarkDelWorker),
  ]);
}
