import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { SuggestionMovieLayout,SuggestionMovieWrapper,Title,} from './styles';

import messages from './messages';

import globalConfigs from 'utils/globalConfigs';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import { MovieItem } from 'components/kit';


import SuggestedMoviesPageSaga from './redux/saga';
import SuggestedMoviePageReducer from './redux/reducer';
import { getSuggestedMoviesAction } from './redux/actions';
import initialState from './redux/initialState';

const SuggestedMoviePageKeyOnRedux = 'SuggestedMovies';

const MovieSuggestions = ({ movieId }) => {
  /** Injectors */
  useInjectReducer({ key: SuggestedMoviePageKeyOnRedux, reducer: SuggestedMoviePageReducer });
  useInjectSaga({ key: SuggestedMoviePageKeyOnRedux, saga: SuggestedMoviesPageSaga });

  const [getSuggestedMovies] = useBindDispatch([getSuggestedMoviesAction]);

  const { data, loading, error } = useSelector(state => state[SuggestedMoviePageKeyOnRedux] || initialState);

  useEffect(() => {
    const { pageLimit } = globalConfigs;

    const options = {
      limit: pageLimit,
    };

    getSuggestedMovies({ movieId, options });
  }, []);

  useEffect(() => {
    
  }, [data]);

  return(
    <SuggestionMovieLayout>
       <Title>
        <FormattedMessage {...messages.title} />
      </Title>
    <SuggestionMovieWrapper>
      {data &&
        data.length > 0 &&
        data.map(item => <MovieItem key={item.id} {...item} />)}
    </SuggestionMovieWrapper>

  </SuggestionMovieLayout>

 
  ); 
};

export default MovieSuggestions;