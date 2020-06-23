import { call, all, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { GET_HOME_PAGE_REQUEST } from './constants';
import { homePageLoaded, homePageFailed } from './actions';

export function* getHomePageWorker() {
  const requestUrl = 'https://api.tamashakhoneh.ir/v3/pages/1?is_complete=true';

  try {
    const homePageResponse = yield call(request, requestUrl);
    // console.log('SUCCESS', { homePageResponse });

    // call success action
    yield put(homePageLoaded(homePageResponse));
  } catch (err) {
    // call failed action
    // console.log('FAILED', { err });
    yield put(homePageFailed(err));
  }
}

// Root Saga
export default function* homePageSaga() {
  yield all([takeLatest(GET_HOME_PAGE_REQUEST, getHomePageWorker)]);
}
