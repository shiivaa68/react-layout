import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import PackageListReducer from './redux/reducer';
import listPackagePageSaga from './redux/saga';
import initialState from './redux/initialState';
import { getPackageAction } from './redux/actions';

const PACKAGEListKeyOnRedux = 'PACKAGEList';

const PackageManager = () => {
  // injectors
  useInjectReducer({ key: PACKAGEListKeyOnRedux, reducer: PackageListReducer });
  useInjectSaga({ key: PACKAGEListKeyOnRedux, saga: listPackagePageSaga });

  // bounded redux actions
  const [getPackage] = useBindDispatch([getPackageAction]);

  // redux store
  const { loading, error, data: packages = {} } = useSelector(
    state => state[PACKAGEListKeyOnRedux] || initialState,
  );

  useEffect(() => {
    getPackage();
  }, []);

  return {
    data: { packages },
    actions: {},
  };
};

export default PackageManager;
