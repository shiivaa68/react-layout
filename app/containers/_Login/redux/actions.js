import {
  ERROR_REGISTER_STEP_ONE,
  UPDATE_REGISTER_STEP_ONE,
  LOADING_REGISTER_STEP_ONE,
  GET_REGISTER_STEP_ONE,
  UPDATE_SHOULD_SHOW_LOGIN,
  UPDATE_SHOULD_SHOW_REGISTER,
} from './constants';

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
