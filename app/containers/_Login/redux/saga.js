import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_REGISTER_STEP_ONE } from './constants';
import {
  loadingRegisterStepOneAction,
  errorRegisterStepOneAction,
  updateShouldShowLogin,
  updateShouldShowRegister,
} from './actions';

function* registerStepOneWorker({ payload: { phoneNumber } }) {
  const url = apiEndpoints.registerStepOne();
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingRegisterStepOneAction(loadingStatus),
    success: () => updateShouldShowRegister(true),
    failure: error => {
      const { status } = error;
      if (status === 405) return errorRegisterStepOneAction(error.message);
      else return updateShouldShowLogin(true);
    },
  };

  const data = {
    mobile: phoneNumber,
  };

  yield requestCall({ url, method, actions, data });
}

export default function* SignPageSaga() {
  yield all([takeLatest(GET_REGISTER_STEP_ONE, registerStepOneWorker)]);
}
