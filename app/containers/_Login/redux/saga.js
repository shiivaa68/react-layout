import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import {
  GET_REGISTER_STEP_ONE,
  GET_LOGIN,
  POST_CONFIRMATION_CODE,
  GET_REGISTER_STEP_THREE,
} from './constants';
import {
  loadingRegisterStepOneAction,
  errorRegisterStepOneAction,
  loadingRegisterStepThreeAction,
  errorRegisterStepThreeAction,
  updateShouldShowLogin,
  updateShouldShowRegister,
  updateShouldShowPassword,

  //LOGIN
  loadingLoginAction,
  errorLoginAction,
  updateLoginAction,
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

//login

function* getLoginWorker({ payload: { phoneNumber, password } }) {
  const url = apiEndpoints.login();
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingLoginAction(loadingStatus),
    success: result => updateLoginAction(result),
    failure: error => errorLoginAction(error),
  };

  const data = {
    mobile: phoneNumber,
    password: btoa(password),
    extra: { browser: window.navigator.appName || window.navigator.userAgent },
  };

  console.log({ data });
  yield requestCall({ url, method, actions, data });
}

// register two
function* postConfirmationCodeWorker({ payload: { mobile, code } }) {
  console.log({ mobile, code });
  const url = apiEndpoints.confirmCode();
  const method = 'POST';
  const actions = {
    loading: loadingStatus => console.log({ loadingStatus }),
    // success: result => console.log({ result }),
    success: () => updateShouldShowPassword(true),
    failure: error => console.log({ error }),
  };

  const data = {
    mobile,
    code,
  };

  yield requestCall({ url, method, actions, data });
}

function* registerStepThreeWorker({ payload: { mobile, code, password } }) {
  console.log('SAGA >>>', { mobile, code, password });
  const url = apiEndpoints.registerStepThree();
  const method = 'POST';
  const actions = {
    loading: loadingStatus => loadingRegisterStepThreeAction(loadingStatus),
    success: result => console.log({ result }),
    failure: error => errorRegisterStepThreeAction(error),
  };
  const data = {
    mobile,
    code,
    password: btoa(password),
    extra: { browser: window.navigator.appName || window.navigator.userAgent },
  };

  yield requestCall({ url, method, actions, data });
}

export default function* SignPageSaga() {
  yield all([takeLatest(GET_REGISTER_STEP_ONE, registerStepOneWorker)]);
  yield all([takeLatest(GET_REGISTER_STEP_THREE, registerStepThreeWorker)]);
  yield all([takeLatest(GET_LOGIN, getLoginWorker)]);
  yield all([takeLatest(POST_CONFIRMATION_CODE, postConfirmationCodeWorker)]);
}
