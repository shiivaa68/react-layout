import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';
import { push } from 'connected-react-router';
import { RouterRoutes } from 'utils/routes';

import { AUTH_FLOW_STEPS } from '../../../constants';

import {
  ENTER_PHONE_NUMBER,
  REGISTER_CONFORMATION_CODE,
  REGISTER_SET_NEW_PASSWORD,
  LOGIN_ASK_PASSWORD,
} from './constants';
import { loadingAction, errorAction, updateStepAction } from './actions';

function* enterPhoneNumberWorker({ payload: { phoneNumber } }) {
  const method = 'POST';
  const url = apiEndpoints.registerStepOne();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: () => updateStepAction(AUTH_FLOW_STEPS.REGISTER_CONFIRMATION_CODE),
    failure: error => {
      console.log('>>>', error);
      const { status, message } = error;
      if (status === 405) return errorAction(message);
      if (status === 409)
        return updateStepAction(AUTH_FLOW_STEPS.LOGIN_ASK_PASSWORD);
    },
  };

  const data = {
    mobile: phoneNumber,
  };

  yield requestCall({ url, method, actions, data });
}

function* registerConfirmationCodeWorker({ payload: { code, mobile } }) {
  console.log('SAGA >>>', code, mobile);
  const method = 'POST';
  const url = apiEndpoints.registerStepTwo();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: () => updateStepAction(AUTH_FLOW_STEPS.REGISTER_NEW_PASSWORD),
    failure: error => {
      console.log('ERROR', error);
      const { status, message } = error;
      return errorAction(message);
    },
  };

  const data = {
    mobile,
    code,
  };

  yield requestCall({ method, url, actions, data });
}

function* registerNewPasswordWorker({
  payload: { mobile, confirmationCode, password, extra },
}) {
  const method = 'POST';
  const url = apiEndpoints.registerStepThree();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: () => push(RouterRoutes.home),
    failure: error => {
      console.log('ERROR', error);
      const { status, message } = error;
      return errorAction(message);
    },
  };

  const data = {
    mobile,
    code: confirmationCode,
    password,
    extra,
  };

  yield requestCall({ method, url, actions, data });
}

function* loginAskPasswordWorker({ payload: { mobile, password, extra } }) {
  console.log('SAGAAAA >>> ', mobile, password, extra);
  const method = 'POST';
  const url = apiEndpoints.login();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: () => push(RouterRoutes.home),
    failure: error => {
      console.log('ERROR', error);
      const { status, message } = error;
      return errorAction(message);
    },
  };

  const data = {
    mobile,
    password,
    extra,
  };

  yield requestCall({ method, url, actions, data });
}

export default function* SignPageSaga() {
  yield all([
    takeLatest(ENTER_PHONE_NUMBER, enterPhoneNumberWorker),
    takeLatest(REGISTER_CONFORMATION_CODE, registerConfirmationCodeWorker),
    takeLatest(REGISTER_SET_NEW_PASSWORD, registerNewPasswordWorker),
    takeLatest(LOGIN_ASK_PASSWORD, loginAskPasswordWorker),
  ]);
}
