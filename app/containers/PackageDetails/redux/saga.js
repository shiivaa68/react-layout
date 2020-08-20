import { all, takeLatest } from 'redux-saga/effects';
import requestCall from 'utils/redux/requestCall';
import { apiEndpoints } from 'utils/api';

import { GET_PACKAGE_DETAILS,GET_PACKAGE_DISCOUNT,GET_PACKAGE_ORDER } from './constants';
import { loadingAction, errorAction, updatePackageDetailsAction,updatePackageDiscountAction,updatePackageOrderAction } from './actions';

function* getPackageDetailsWorker({ payload: { id } }) {
  
  const url = apiEndpoints.getCategoryDetails(id);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updatePackageDetailsAction(result),
    failure: error => errorAction(error),
  };

  yield requestCall({ url, method, actions });
}

function* getPackageDiscountWorker({ payload: { id,discount_code } }) {
  
  const url = apiEndpoints.getDiscountPackage(id,discount_code);
  const method = 'GET';
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result => updatePackageDiscountAction(result),
    failure: error => errorAction(error),
  };
  yield requestCall({ url, method, actions });
}


function* orderPackageWorker({ payload: { discount_code } }) {
  const method = 'POST';
  const url = apiEndpoints.orderPackage();
  const actions = {
    loading: loadingStatus => loadingAction(loadingStatus),
    success: result=> updatePackageOrderAction(result),
    failure: error => errorAction(error)
  };
  const data = {
   discount_code,
  };

  yield requestCall({ url, method, actions, data });
}

export default function* PackageDetailsPageSaga() {
  yield all([takeLatest(GET_PACKAGE_DETAILS, getPackageDetailsWorker)]);
  yield all([takeLatest(GET_PACKAGE_DISCOUNT, getPackageDiscountWorker)]);
  yield all([takeLatest(GET_PACKAGE_ORDER, orderPackageWorker)]);
}

