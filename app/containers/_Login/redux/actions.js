import {
  ERROR,
  LOADING,
  UPDATE_STEP,
  ENTER_PHONE_NUMBER,
  OTP_LOGIN_ENTER_PHONE_NUMBER,
  REGISTER_CONFORMATION_CODE,
  OTP_LOGIN_CONFORMATION_CODE,
  REGISTER_SET_NEW_PASSWORD,
  LOGIN_ASK_PASSWORD,
  FORGET_PASSWORD_ENTER_PHONE_NUMBER,
  FORGET_PASSWORD_CONFIRMATION_CODE,
} from './constants';

export function errorAction(error) {
  return {
    type: ERROR,
    payload: { error },
  };
}

export function loadingAction(loadingStatus) {
  return {
    type: LOADING,
    payload: { loadingStatus },
  };
}

export function updateStepAction(step) {
  return {
    type: UPDATE_STEP,
    payload: { step },
  };
}

/** Steps */
export function enterPhoneNumberAction({ ...options }) {
  return {
    type: ENTER_PHONE_NUMBER,
    payload: { ...options },
  };
}

export function enterOTPLoginPhoneNumberAction({ ...options }) {
  return {
    type: OTP_LOGIN_ENTER_PHONE_NUMBER,
    payload: { ...options },
  };
}

export function registerConfirmCodeAction({ ...options }) {
  return {
    type: REGISTER_CONFORMATION_CODE,
    payload: { ...options },
  };
}

export function loginOtpConfirmCodeAction({ ...options }) {
  return {
    type: OTP_LOGIN_CONFORMATION_CODE,
    payload: { ...options },
  };
}

export function registerSetNewPasswordAction({ ...options }) {
  return {
    type: REGISTER_SET_NEW_PASSWORD,
    payload: { ...options },
  };
}

export function loginAskPasswordAction({ ...options }) {
  return {
    type: LOGIN_ASK_PASSWORD,
    payload: { ...options },
  };
}

export function enterForgetPasswordPhoneNumberAction({ ...options }) {
  return {
    type: FORGET_PASSWORD_ENTER_PHONE_NUMBER,
    payload: { ...options },
  };
}

export function forgetPasswordConfirmationCodeAction({ ...options }) {
  return {
    type: FORGET_PASSWORD_CONFIRMATION_CODE,
    payload: { ...options },
  };
}
