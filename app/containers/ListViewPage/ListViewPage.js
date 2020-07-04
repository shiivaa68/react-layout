import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import { ListViewContainer } from './style';

import ListViewReducer from './redux/reducer';
import ListViewSaga from './redux/saga';
import initialState from './redux/initialState';
import { getListDataAction } from './redux/actions';

import globalConfigs from 'utils/globalConfigs';

const ListViewKeyOnRedux = 'ListView';

const ListViewPage = ({ location }) => {
  // injectors
  useInjectReducer({ key: ListViewKeyOnRedux, reducer: ListViewReducer });
  useInjectSaga({ key: ListViewKeyOnRedux, saga: ListViewSaga });

  // local states
  const [page, setPage] = useState(1);

  // bounded redux actions
  const [getListData] = useBindDispatch([getListDataAction]);

  // redux store
  const { loading, error, data = {} } = useSelector(state => state[ListViewKeyOnRedux] || initialState);

  // did mount
  useEffect(() => {
    const { pageLimit } = globalConfigs;

    const { search } = location;
    const parsedQueryString = qs.parse(search.slice(1));

    getListData({ pageLimit, page, parsedQueryString });

    window.scrollTo({ top: 0, left: 0 });
  }, [page]);

  useEffect(() => {
    console.log({ loading, error, data });
  }, [loading, error, data]);

  return (
    <ListViewContainer>
      {data &&
        data.data &&
        data.data.items.length > 0 &&
        data.data.items.map(item => <h3 key={item.id}>{item.title_fa}</h3>)}
    </ListViewContainer>
  );
};

export default ListViewPage;
