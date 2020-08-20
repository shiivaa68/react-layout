import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_CREW } from './constants';
import { loadingAction, errorAction, updateCrewAction } from './actions';

function* getCrewWorker({ payload: { id } }) {
  
  const url = apiEndpoints.getCrew(id);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateCrewAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

export default function* CrewPageSaga() {
  yield all([takeLatest(GET_CREW, getCrewWorker)]);
}

