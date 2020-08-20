
import { ERROR, LOADING, GET_CREW, UPDATE_CREW } from './constants';

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

export function getCrewAction({ ...options }) {
  return {
    type: GET_CREW,
    payload: { ...options },
  };
}

export function updateCrewAction(data) {
  return {
    type: UPDATE_CREW,
    payload: data,
  };
}