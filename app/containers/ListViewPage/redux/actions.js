import { ERROR, LOADING, GET_LIST_DATA, UPDATE_LIST_DATA, RESET_LIST_DATA } from './constants';

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

export function getListDataAction({ ...options }) {
  return {
    type: GET_LIST_DATA,
    payload: { ...options },
  };
}

export function updateListDataAction(data) {
  return {
    type: UPDATE_LIST_DATA,
    payload: data,
  };
}

export function resetListDataAction(initialState) {
  return {
    type: RESET_LIST_DATA,
    payload: initialState,
  };
}
