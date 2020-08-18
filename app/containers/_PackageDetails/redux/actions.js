import { ERROR, LOADING, GET_PACKAGE_DETAILS, UPDATE_PACKAGE_DETAILS } from './constants';

export function loadingAction(loadingStatus) {
  return {
    type: LOADING,
    payload: { loadingStatus },
  };
}

export function errorAction(error) {
  return {
    type: ERROR,
    payload: { error },
  };
}

export function getPackageDetailsAction({ ...options }) {
  return {
    type: GET_PACKAGE_DETAILS,
    payload: { ...options },
  };
}

export function updatePackageDetailsAction(data) {
  return {
    type: UPDATE_PACKAGE_DETAILS,
    payload: data,
  };
}