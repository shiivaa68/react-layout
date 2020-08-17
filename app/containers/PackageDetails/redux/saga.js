import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_PACKAGE_DETAILS } from './constants';
import {
  loadingAction,
  errorAction,
  updatePackageDetailsAction,
} from './actions';

function* getPackageDetailsWorker({ payload: { id } }) {
  const url = apiEndpoints.getCategoryDetails(id);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updatePackageDetailsAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

export default function* PackageDetailsPageSaga() {
  yield all([takeLatest(GET_PACKAGE_DETAILS, getPackageDetailsWorker)]);
}
