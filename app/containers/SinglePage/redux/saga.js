import { all, takeLatest } from 'redux-saga/effects';
import { apiEndpoints } from 'utils/api';
import requestCall from 'utils/redux/requestCall';

import { GET_SINGLEPAGE } from './constants';
import { loadingAction, errorAction, updateSinglePageAction } from './actions';

function* getSinglePageWorker({ payload: { pageId, params } }) {
  const url = apiEndpoints.getSinglePage(pageId, params);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateSinglePageAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

// Root Saga
export default function* singlePageSaga() {
  yield all([takeLatest(GET_SINGLEPAGE, getSinglePageWorker)]);
}
