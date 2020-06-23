import React, { useEffect, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';
// import { SomeComponent } from './components';

import HomePageReducer from './redux/reducer';
import HomePageSaga from './redux/saga';
import { getHomePageAction } from './redux/actions';
import initialState from './redux/initialState';

const HomePageKeyOnRedux = 'HomePage';

const JunkPage = props => {
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
    console.log(data);
  }, [data]);

  const handleGetHomePageData = () => {
    getHomePage();
  };

  return (
    <article>
      <h3>Junk Page</h3>

      {/* <SomeComponent /> */}

      <button onClick={handleGetHomePageData}>Get home Page Data</button>

      {loading && <h4>loading...</h4>}
      {error && (
        <h4>
          ERROR: <pre>{error}</pre>
        </h4>
      )}
      {data &&
        data.data &&
        data.data.data.map((category, i) => (
          <article>
            <p key={i}>{category.type}</p>
            <div>
              {category.data.items.map(el => (
                <>
                  <img width={150} src={el.image_path} />
                  <span style={{ padding: '0 1rem' }}>{el.title_fa}</span>
                </>
              ))}
            </div>
          </article>
        ))}
    </article>
  );
};

export default JunkPage;
