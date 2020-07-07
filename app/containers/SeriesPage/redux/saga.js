import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_SERIESPAGE } from './constants';
import { loadingAction, errorAction, updateSeriesAction } from './actions';

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

export default function* seriesPageSaga() {
  yield all([takeLatest(GET_SERIESPAGE, getSeriesPageWorker)]);
}
