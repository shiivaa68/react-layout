import { all, takeLatest } from 'redux-saga/effects';
import { apiEndpoints } from 'utils/api';
import requestCall from 'utils/redux/requestCall';

import { GET_PACKAGE_DATA } from './constants';
import { loadingAction, errorAction, updatePakageAction } from './actions';

function* getListPackageWorker({payload:{id}})
// console.log({payload},'payload package hastam')
{
  const url = apiEndpoints.getListPackages(id);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updatePakageAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

// ROOT SAGA
export default function* listPackagePageSaga() {
  yield all([takeLatest(GET_PACKAGE_DATA, getListPackageWorker)]);
}
