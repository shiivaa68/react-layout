import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';
import { SomeComponent } from './components';

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

  console.log(data)

  return (
    <article>
      <h3>Junk Page</h3>

      <SomeComponent />

      {loading && <h4>loading...</h4>}
      {error && (
        <h4>
          ERROR: <pre>{error}</pre>
        </h4>
      )}
      {data.length > 0 &&
        data.map((category, i) => (
          <article key={i}>
            <p>{category.type}</p>
          </article>
        ))}
    </article>
  );
};

export default JunkPage;
