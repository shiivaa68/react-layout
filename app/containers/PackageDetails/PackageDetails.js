import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import qs from 'qs';

import { PackageDetailLayout,SuggestionMovieWrapper,Title,} from './styles';

import messages from './messages';

import globalConfigs from 'utils/globalConfigs';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import PackageDetailsPageSaga from './redux/saga';
import PackageDetailsPageReducer from './redux/reducer';
import { getPackageDetailsAction } from './redux/actions';
import initialState from './redux/initialState';

import {OrderForm} from './components/OrderForm';
const PackageDetailsageKeyOnRedux = 'PackageDetails';

const PackageDetails = ({ match }) => {
  /** Injectors */
  useInjectReducer({ key: PackageDetailsageKeyOnRedux, reducer: PackageDetailsPageReducer });
  useInjectSaga({ key: PackageDetailsageKeyOnRedux, saga: PackageDetailsPageSaga });

  const [getPackageDetails] = useBindDispatch([getPackageDetailsAction]);

  const { data_package_datail, loading, error } = useSelector(state => state[PackageDetailsageKeyOnRedux] || initialState);

  useEffect(() => {
    const id = match.params.id;
    getPackageDetails({id});
    console.log({data_package_datail})
  }, []);

  // useEffect(() => {
    
  // }, [data]);

  return(
    <PackageDetailLayout>
     < OrderForm data={data_package_datail}/>
  </PackageDetailLayout>
 
  ); 
};

export default PackageDetails;