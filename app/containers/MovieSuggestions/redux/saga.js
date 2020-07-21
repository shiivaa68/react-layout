import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_SUGGESTED_MOVIES } from './constants';
import { loadingAction, errorAction, updateSuggestedMoviesAction } from './actions';

function* getSuggestedMoviesWorker({ payload: { movieId, options } }) {
  const url = apiEndpoints.getSuggestedMovies(movieId, options);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateSuggestedMoviesAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

export default function* SuggestedMoviesPageSaga() {
  yield all([takeLatest(GET_SUGGESTED_MOVIES, getSuggestedMoviesWorker)]);
}