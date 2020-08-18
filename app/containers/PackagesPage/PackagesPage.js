import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import globalConfigs from 'utils/globalConfigs';
import { PackageItem } from 'components/kit';

import PackageListReducer from './redux/reducer';
import listPackagePageSaga from './redux/saga';
import initialState from './redux/initialState';
import { getPackageAction } from './redux/actions';

import { PackageViewLayout, Title, PackageWrapper,Line} from './styles';

const PACKAGEListKeyOnRedux = 'PACKAGEList';

const PackagesPage = () => {
  // injectors
  useInjectReducer({ key: PACKAGEListKeyOnRedux, reducer: PackageListReducer });
  useInjectSaga({ key: PACKAGEListKeyOnRedux, saga: listPackagePageSaga });


  // bounded redux actions
  const [getPackage] = useBindDispatch([
    getPackageAction,
  ]);

  // redux store
  const { loading, error, data = {} } = useSelector(
    state => state[PACKAGEListKeyOnRedux] || initialState,
  );

  useEffect(() => {
 
    getPackage();
  }, []);

  useEffect(() => {

  }, [data]);

  // console.log({data},'data package hastam');


  return (
    <PackageViewLayout>
        {/* <Line/> */}
      <PackageWrapper>
      <Title>
      <FormattedMessage {...messages.titlePackage} />
        
        </Title>
        {data &&
          data.length > 0 &&
          data.map(item => <PackageItem key={item.id} {...item} />)}
      </PackageWrapper>

    </PackageViewLayout>
  );
};

export default PackagesPage;
