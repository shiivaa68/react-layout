import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_MOVIEPAGE } from './constants';
import { loadingAction, errorAction, updateMoviesAction } from './actions';

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

export default function* moviesPageSaga() {
  yield all([takeLatest(GET_MOVIEPAGE, getMoviesPageWorker)]);
}
