import {
  //REGISTER
  ERROR_REGISTER_STEP_ONE,
  UPDATE_REGISTER_STEP_ONE,
  LOADING_REGISTER_STEP_ONE,
  GET_REGISTER_STEP_ONE,
  ERROR_CONFIRMATION_CODE,
  LODING_CONFIRMATION_CODE,
  POST_CONFIRMATION_CODE,
  RESET_CONFIRMATION_CODE,
  ERROR_REGISTER_STEP_THREE,
  UPDATE_REGISTER_STEP_THREE,
  LOADING_REGISTER_STEP_THREE,
  GET_REGISTER_STEP_THREE,
  UPDATE_SHOULD_SHOW_LOGIN,
  UPDATE_SHOULD_SHOW_REGISTER,
  UPDATE_SHOULD_SHOW_PASSWORD,

  //login
  ERROR_LOGIN,
  LOADING_LOGIN,
  UPDATE_LOGIN,
  GET_LOGIN,
} from './constants';
//REGISTER STEP ONE
export function loadingRegisterStepOneAction(loadingStatus) {
  return {
    type: LOADING_REGISTER_STEP_ONE,
    payload: { loadingStatus },
  };
}

export function errorRegisterStepOneAction(error) {
  return {
    type: ERROR_REGISTER_STEP_ONE,
    payload: { error },
  };
}

export function getRegisterStepOneAction({ ...options }) {
  return {
    type: GET_REGISTER_STEP_ONE,
    payload: { ...options },
  };
}

export function updateRegisterStepOneAction(data) {
  return {
    type: UPDATE_REGISTER_STEP_ONE,
    payload: data,
  };
}

//REGISTER STEP THREE
export function loadingRegisterStepThreeAction(loadingStatus) {
  return {
    type: LOADING_REGISTER_STEP_THREE,
    payload: { loadingStatus },
  };
}

export function errorRegisterStepThreeAction(error) {
  return {
    type: ERROR_REGISTER_STEP_THREE,
    payload: { error },
  };
}

export function getRegisterStepThreeAction({ ...options }) {
  return {
    type: GET_REGISTER_STEP_THREE,
    payload: { ...options },
  };
}

export function updateRegisterStepThreeAction(data) {
  return {
    type: UPDATE_REGISTER_STEP_THREE,
    payload: data,
  };
}

/*************************** */
export function updateShouldShowLogin(status) {
  return {
    type: UPDATE_SHOULD_SHOW_LOGIN,
    payload: status,
  };
}
export function updateShouldShowRegister(status) {
  return {
    type: UPDATE_SHOULD_SHOW_REGISTER,
    payload: status,
  };
}
export function updateShouldShowPassword(status) {
  return {
    type: UPDATE_SHOULD_SHOW_PASSWORD,
    payload: status,
  };
}
/*************************** LOGIN*/

export function loadingLoginAction(loadingStatus) {
  return {
    type: LOADING_LOGIN,
    payload: { loadingStatus },
  };
}

export function errorLoginAction(error) {
  return {
    type: ERROR_LOGIN,
    payload: { error },
  };
}

export function getLoginAction({ ...options }) {
  return {
    type: GET_LOGIN,
    payload: { ...options },
  };
}

export function updateLoginAction(data) {
  return {
    type: UPDATE_LOGIN,
    payload: data,
  };
}

//confirm code

export function loadingConfirmationCodeAction(loadingStatus) {
  return {
    type: LODING_CONFIRMATION_CODE,
    payload: { loadingStatus },
  };
}

export function errorConfirmationCodeAction(error) {
  return {
    type: ERROR_CONFIRMATION_CODE,
    payload: { error },
  };
}

export function postConfirmationCodeAction({ ...options }) {
  return {
    type: POST_CONFIRMATION_CODE,
    payload: { ...options },
  };
}

export function updateConfirmationCodeAction(data) {
  return {
    type: UPDATE_CONFIRMATION_CODE,
    payload: data,
  };
}
