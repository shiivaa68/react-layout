import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_ROLES } from './constants';
import { loadingAction, errorAction, updateRolesAction } from './actions';

function* getRolesWorker() {
  const url = apiEndpoints.getRoles();
  const method = 'GET';
  const actions = {
    loading: loadingStatus => console.log('LOADING_ROLES >>> ', { loadingStatus }),
    success: result => updateRolesAction(result),
    failure: error => console.log('ROLES_FAILURE >>> ', { error }),
  };

  yield requestCall({ url, method, actions });
}

export default function* GlobalSaga() {
  yield all([takeLatest(GET_ROLES, getRolesWorker)]);
}
