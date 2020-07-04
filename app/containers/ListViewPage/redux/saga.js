import { all, takeLatest } from 'redux-saga/effects';
import { apiEndpoints } from 'utils/api';
import requestCall from 'utils/redux/requestCall';

import { GET_LIST_DATA } from './constants';
import { loadingAction, errorAction, updateListDataAction } from './actions';

function* getListDataWorker({
  payload: {
    page,
    pageLimit,
    parsedQueryString: { id, item_sort, sort_type },
  },
}) {
  const queryOptions = { limit: pageLimit, page, item_sort, sort_type };
  const url = apiEndpoints.getListData(id, queryOptions);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updateListDataAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

// ROOT SAGA
export default function* listViewPageSaga() {
  yield all([takeLatest(GET_LIST_DATA, getListDataWorker)]);
}
