import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { SuggestionSeriesLayout,SuggestionSeriesWrapper,Title,} from './styles';

import messages from './messages';

import globalConfigs from 'utils/globalConfigs';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import { MovieItem } from 'components/kit';


import SuggestedSeriesPageSaga from './redux/saga';
import SuggestedSeriePageReducer from './redux/reducer';
import { getSuggestionSeriesAction } from './redux/actions';
import initialState from './redux/initialState';

const SuggestedSeriePageKeyOnRedux = 'SuggestedSeries';

const SerieSuggestions = ({ serieId }) => {
  /** Injectors */
  useInjectReducer({ key: SuggestedSeriePageKeyOnRedux, reducer: SuggestedSeriePageReducer });
  useInjectSaga({ key: SuggestedSeriePageKeyOnRedux, saga: SuggestedSeriesPageSaga });

  const [getSuggestionSeries] = useBindDispatch([getSuggestionSeriesAction]);

  const { data, loading, error } = useSelector(state => state[SuggestedSeriePageKeyOnRedux] || initialState);

  useEffect(() => {
    const { pageLimit } = globalConfigs;

    const options = {
      limit: pageLimit,
    };

    getSuggestionSeries({ serieId, options });
  }, []);

  useEffect(() => {
    console.log({ data },'i am here in seri suggested');
  }, [data]);

  return(
    <SuggestionSeriesLayout>
       <Title>
        <FormattedMessage {...messages.title} />
      </Title>
    <SuggestionSeriesWrapper>
      {data &&
        data.length > 0 &&
        data.map(item => <MovieItem key={item.id} {...item} />)}
    </SuggestionSeriesWrapper>

  </SuggestionSeriesLayout>

 
  ); 
};

export default SerieSuggestions;