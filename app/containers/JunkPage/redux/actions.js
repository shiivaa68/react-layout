import {
  GET_HOME_PAGE_REQUEST,
  GET_HOME_PAGE_SUCCESS,
  GET_HOME_PAGE_FAILURE,
} from './constants';

export function getHomePageAction() {
  return {
    type: GET_HOME_PAGE_REQUEST,
  };
}

export function homePageLoaded(result) {
  return {
    type: GET_HOME_PAGE_SUCCESS,
    payload: { result },
  };
}

export function homePageFailed(error) {
  return {
    type: GET_HOME_PAGE_FAILURE,
    payload: { error },
  };
}
