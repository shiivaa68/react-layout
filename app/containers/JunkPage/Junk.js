import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Banner from 'components/Banner';
import Category from 'components/Category';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import HomePageReducer from './redux/reducer';
import HomePageSaga from './redux/saga';
import { getHomePageAction } from './redux/actions';
import initialState from './redux/initialState';

const HomePageKeyOnRedux = 'HomePage';

const JunkPage = () => {
  // injectors
  useInjectReducer({ key: HomePageKeyOnRedux, reducer: HomePageReducer });
  useInjectSaga({ key: HomePageKeyOnRedux, saga: HomePageSaga });

  // bounded redux actions
  const [getHomePage] = useBindDispatch([getHomePageAction]);

  // redux state
  const { loading, error, data } = useSelector(
    state => state[HomePageKeyOnRedux] || initialState,
  );

  useEffect(() => {
    const pageId = 1;
    const params = {
      is_complete: true,
    };
    getHomePage({ pageId, params });
  }, []);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <article>
      {loading && <h4>loading...</h4>}
      {error && (
        <h4>
          ERROR: <pre>{error}</pre>
        </h4>
      )}
      {data.length > 0 &&
        data.map((section, i) => (
          <article key={i}>
            {section.type === 'banner' && <Banner {...section.data} />}
            {section.type === 'category' && <Category {...section.data} />}
          </article>
        ))}
    </article>
  );
};

export default JunkPage;
