import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import qs from 'qs';

import { CrewDetailLayout,SuggestionMovieWrapper,Title,} from './styles';

import messages from './messages';

import globalConfigs from 'utils/globalConfigs';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import CrewPageSaga from './redux/saga';
import CrewPageReducer from './redux/reducer';
import { getCrewAction } from './redux/actions';
import initialState from './redux/initialState';

import { Crew } from 'components';
const CrewPagesageKeyOnRedux = 'CrewPage';

const CrewPage= ({ match }) => {
//   /** Injectors */
  useInjectReducer({ key: CrewPagesageKeyOnRedux, reducer: CrewPageReducer });
  useInjectSaga({ key: CrewPagesageKeyOnRedux, saga: CrewPageSaga });

  const [getCrew] = useBindDispatch([getCrewAction]);

  const { data, loading, error } = useSelector(state => state[CrewPagesageKeyOnRedux] || initialState);

  useEffect(() => {
    const id = match.params.id;
    getCrew({id});
  }, []);

  useEffect(() => {
    
  }, [data]);

  return(
    <CrewDetailLayout>
     <Crew data={data}/>
       {/* {data &&
        data.length > 0 &&
        data.map(item => <MovieItem key={item.id} {...item} />)} */}
       <span>man injam</span>
   </CrewDetailLayout>
 
  ); 
};

export default CrewPage;