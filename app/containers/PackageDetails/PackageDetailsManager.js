import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import qs from 'qs';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import PackageDetailsPageSaga from './redux/saga';
import PackageDetailsPageReducer from './redux/reducer';
import { getPackageDetailsAction } from './redux/actions';
import initialState from './redux/initialState';

const PackageDetailsageKeyOnRedux = 'PackageDetails';

const PackageDetailsManager = ({ match }) => {
  /** Injectors */
  useInjectReducer({
    key: PackageDetailsageKeyOnRedux,
    reducer: PackageDetailsPageReducer,
  });
  useInjectSaga({
    key: PackageDetailsageKeyOnRedux,
    saga: PackageDetailsPageSaga,
  });

  const [getPackageDetails] = useBindDispatch([getPackageDetailsAction]);

  const { data_package_datail, loading, error } = useSelector(
    state => state[PackageDetailsageKeyOnRedux] || initialState,
  );

  useEffect(() => {
    const id = match.params.id;
    getPackageDetails({ id });
  }, []);

  const handleDiscountSubmit = useCallback(({ discount_code }) => {
    console.log('DISCOUNT VALUE >>>', discount_code);
  }, []);

  return {
    data: { data_package_datail },
    actions: { handleDiscountSubmit },
  };
};

export default PackageDetailsManager;
