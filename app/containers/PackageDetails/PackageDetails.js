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

const PackageDetails = ({ location }) => {
  /** Injectors */
  useInjectReducer({ key: PackageDetailsageKeyOnRedux, reducer: PackageDetailsPageReducer });
  useInjectSaga({ key: PackageDetailsageKeyOnRedux, saga: PackageDetailsPageSaga });

  const [getPackageDetails] = useBindDispatch([getPackageDetailsAction]);

  const { data, loading, error } = useSelector(state => state[PackageDetailsageKeyOnRedux] || initialState);

  useEffect(() => {
    const { search } = location;
    const id = qs.parse(search.slice(1));
    getPackageDetails(id);
  console.log({id} ,'id item package')
    console.log({data},"man data hastam baray pavckage details")
  }, []);

  useEffect(() => {
    
  }, [data]);

  return(
    <PackageDetailLayout>
   
     < OrderForm data={data}/>
      {/* {data &&
        data.length > 0 &&
        data.map(item => <MovieItem key={item.id} {...item} />)} */}
  
  </PackageDetailLayout>
 
  ); 
};

export default PackageDetails;