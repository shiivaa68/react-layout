import { all, takeLatest } from 'redux-saga/effects';
import { apiEndpoints } from 'utils/api';
import requestCall from 'utils/redux/requestCall';

import { GET_HOMEPAGE } from './constants';
import { loadingAction, errorAction, updateHomePageAction } from './actions';

function* getHomePageWorker({ payload: { pageId, params } }) {
  const url = apiEndpoints.getHomePage(pageId, params);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateHomePageAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

/** GLOBAL WORKERS */
// function* getRolesWorker() {
//   const url = apiEndpoints.getRoles();
//   const method = 'GET';
//   const actions = {
//     loading: loadingStatus => console.log('LOADING >>> ', loadingStatus),
//     success: result => console.log('SUCCESS >>> ', result),
//     failure: error => console.log('ERROR >>> ', error),
//   };

//   yield requestCall({ url, method, actions });
// }

// Root Saga
export default function* homePageSaga() {
  yield all([takeLatest(GET_HOMEPAGE, getHomePageWorker)]);
}
