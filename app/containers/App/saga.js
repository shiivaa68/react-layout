import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_ROLES, GET_LANGUAGES, GET_AGERANGE, GET_GENRES, GET_COUNTRY } from './constants';
import {
  loadingAction,
  errorAction,
  updateRolesAction,
  updateLanguagesAction,
  updateAgeRangeAction,
  updateGenrsAction,
  updateCountryAction,
} from './actions';

function* getRolesWorker() {
  const url = apiEndpoints.getRoles();
  const method = 'GET';
  const actions = {
    loading: loadingStatus => null,
    success: result => updateRolesAction(result),
    failure: error => console.log('ROLES_FAILURE >>> ', { error }),
  };

  yield requestCall({ url, method, actions });
}

function* getLanguagesWorker() {
  const url = apiEndpoints.getLanguages();
  const method = 'GET';
  const actions = {
    loading: loadingStatus => null,
    success: result => updateLanguagesAction(result),
    failure: error => console.log('LANGUAGES >>> ', { error }),
  };

  yield requestCall({ url, method, actions });
}

function* getAgeRangeWorker() {
  const url = apiEndpoints.getAgeRange();
  const method = 'GET';
  const actions = {
    loading: loadingStatus => null,
    success: result => updateAgeRangeAction(result),
    failure: error => console.log('LANGUAGES >>> ', { error }),
  };

  yield requestCall({ url, method, actions });
}

function* getGenresWorker() {
  const url = apiEndpoints.getGenrs();
  const method = 'GET';
  const actions = {
    loading: loadingStatus => null,
    success: result => updateGenrsAction(result),
    failure: error => console.log('LANGUAGES >>> ', { error }),
  };

  yield requestCall({ url, method, actions });
}

function* getCountryWorker() {
  const url = apiEndpoints.getCountry();
  const method = 'GET';
  const actions = {
    loading: loadingStatus => null,
    success: result => updateCountryAction(result),
    failure: error => console.log('LANGUAGES >>> ', { error }),
  };

  yield requestCall({ url, method, actions });
}

export default function* GlobalSaga() {
  yield all([takeLatest(GET_ROLES, getRolesWorker)]);
  yield all([takeLatest(GET_LANGUAGES, getLanguagesWorker)]);
  yield all([takeLatest(GET_AGERANGE, getAgeRangeWorker)]);
  yield all([takeLatest(GET_GENRES, getGenresWorker)]);
  yield all([takeLatest(GET_COUNTRY, getCountryWorker)]);
}
