import { ERROR, LOADING, GET_PACKAGE_DETAILS, UPDATE_PACKAGE_DETAILS,GET_PACKAGE_DISCOUNT,UPDATE_PACKAGE_DISCOUNT,GET_PACKAGE_ORDER,UPDATE_PACKAGE_ORDER } from './constants';

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

export function getPackageDiscountAction({ ...options }) {
  return {
    type: GET_PACKAGE_DISCOUNT,
    payload: { ...options },
  };
}

export function updatePackageDiscountAction(data) {
  return {
    type: UPDATE_PACKAGE_DISCOUNT,
    payload: data,
  };
}

export function getPackageOrderAction({ ...options }) {
  return {
    type: GET_PACKAGE_ORDER,
    payload: { ...options },
  };
}

export function updatePackageOrderAction(data) {
  return {
    type: UPDATE_PACKAGE_ORDER,
    payload: data,
  };
}