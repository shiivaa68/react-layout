import {
    ERROR,
    LOADING,
    GET_PACKAGE_DATA,
    UPDATE_PACKAGE_DATA,
  } from './constants';
  
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
  
  export function getPackageAction({ ...options }) {
    return {
      type: GET_PACKAGE_DATA,
      payload: { ...options },
    };
  }
  
  export function updatePakageAction(data) {
    return {
      type: UPDATE_PACKAGE_DATA,
      payload: data,
    };
  }
  
