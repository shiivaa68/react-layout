import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';
import { push } from 'connected-react-router';
import { RouterRoutes } from 'utils/routes';

import { AUTH_FLOW_STEPS } from '../../../constants';

import {
  ENTER_PHONE_NUMBER,
  OTP_LOGIN_ENTER_PHONE_NUMBER,
  REGISTER_CONFORMATION_CODE,
  OTP_LOGIN_CONFORMATION_CODE,
  REGISTER_SET_NEW_PASSWORD,
  LOGIN_ASK_PASSWORD,
  FORGET_PASSWORD_ENTER_PHONE_NUMBER,
  FORGET_PASSWORD_CONFIRMATION_CODE,
  FORGET_SET_NEW_PASSWORD,
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

function* OTPLoginEnterPhoneNumberWorker({ payload: { phoneNumber } }) {
  const method = 'POST';
  const url = apiEndpoints.otpLoginStepOne();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: () => updateStepAction(AUTH_FLOW_STEPS.OTP_CONFIRMATION_CODE),
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

function* loginOtpConfirmationCodeWorker({ payload: { code, mobile, extra } }) {
  const method = 'POST';
  const url = apiEndpoints.otpLoginStepTwo();
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
    code,
    extra,
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

function* forgetLoginEnterPhoneNumberWorker({ payload: { mobile } }) {
  console.log({ mobile }, 'payloadam forget');

  const method = 'POST';
  const url = apiEndpoints.forgetPassStepOne();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: () =>
      updateStepAction(AUTH_FLOW_STEPS.FORGET_PASSWORD_CONFIRMATION_CODE),
    failure: error => {
      console.log('>>>', error);
      const { status, message } = error;
      if (status === 405) return errorAction(message);
      if (status === 409)
        return updateStepAction(AUTH_FLOW_STEPS.LOGIN_ASK_PASSWORD);
    },
  };

  const data = {
    mobile,
  };

  yield requestCall({ url, method, actions, data });
}

function* forgerPasswordConfirmationCodeWorker({ payload: { code, mobile } }) {
  console.log('>>>>', { code, mobile });

  const method = 'POST';
  const url = apiEndpoints.forgetPassStepTwo();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: () =>
      updateStepAction(AUTH_FLOW_STEPS.FORGET_PASSWORD_NEW_PASSWORD),
    failure: error => {
      console.log('ERROR', error);
      const { status, message } = error;
      return errorAction(message);
    },
  };

  const data = {
    code,
    mobile,
  };

  yield requestCall({ method, url, actions, data });
}

function* forgetPasswordNewPasswordWorker({
  payload: { mobile, confirmationCode, password, extra },
}) {
  const method = 'POST';
  const url = apiEndpoints.forgetPassStepThree();
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

export default function* SignPageSaga() {
  yield all([
    takeLatest(ENTER_PHONE_NUMBER, enterPhoneNumberWorker),
    takeLatest(OTP_LOGIN_ENTER_PHONE_NUMBER, OTPLoginEnterPhoneNumberWorker),
    takeLatest(REGISTER_CONFORMATION_CODE, registerConfirmationCodeWorker),
    takeLatest(OTP_LOGIN_CONFORMATION_CODE, loginOtpConfirmationCodeWorker),
    takeLatest(REGISTER_SET_NEW_PASSWORD, registerNewPasswordWorker),
    takeLatest(LOGIN_ASK_PASSWORD, loginAskPasswordWorker),
    takeLatest(
      FORGET_PASSWORD_ENTER_PHONE_NUMBER,
      forgetLoginEnterPhoneNumberWorker,
    ),
    takeLatest(
      FORGET_PASSWORD_CONFIRMATION_CODE,
      forgerPasswordConfirmationCodeWorker,
    ),
    takeLatest(
      FORGET_SET_NEW_PASSWORD,
      forgetPasswordNewPasswordWorker,
    ),
  ]);
}