import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Banner from 'components/Banner';
import Category from 'components/Category';
import ErrorComponent from 'components/ErrorComponent';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import SinglePageReducer from './redux/reducer';
import singlePageSaga from './redux/saga';
import { getSinglePageAction } from './redux/actions';

import initialState from './redux/initialState';
import { HomePageWrapper, SectionWrapper } from './styles';


const SinglePageKeyOnRedux = 'SinglePage';

const SinglePage = ({match}) => {
  // injectors
  useInjectReducer({ key: SinglePageKeyOnRedux, reducer: SinglePageReducer });
  useInjectSaga({ key: SinglePageKeyOnRedux, saga: singlePageSaga });

  // bounded redux actions
  const [getSinglePage] = useBindDispatch([getSinglePageAction]);

  // redux state
  const { loading, error, data = [] } = useSelector(
    state => state[SinglePageKeyOnRedux] || initialState,
  );
  useEffect(() => {
    console.log({ match });
    let pageId = null;
    if (match.params.pageId) {
      const pageSingle = match.params.pageId;
      pageId = pageSingle;
    } else {
      pageId = 1;
    }

    const params = {
      is_complete: true,
    };
    getSinglePage({ pageId, params });
  }, [match.params.pageId]);
  
  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <HomePageWrapper>
      {loading && <h4>loading...</h4>}
      {error && <ErrorComponent message={error} />}
      {data &&
        data.length > 0 &&
        data.map((section, i) => (
          <SectionWrapper key={i}>
            {section.type === 'banner' && (
              <Banner index={i} {...section.data} />
            )}
            {section.type === 'category' && (
              <Category index={i} {...section.data} />
            )}
          </SectionWrapper>
        ))}
    </HomePageWrapper>
  );
};

export default SinglePage;
