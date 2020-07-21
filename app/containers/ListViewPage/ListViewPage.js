import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { Waypoint } from 'react-waypoint';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import globalConfigs from 'utils/globalConfigs';
import { MovieItem } from 'components/kit';

import ListViewReducer from './redux/reducer';
import ListViewSaga from './redux/saga';
import initialState from './redux/initialState';
import { getListDataAction, resetListDataAction } from './redux/actions';

import { ListViewLayout, Title, ListWrapper, WayPointArea } from './style';

const ListViewKeyOnRedux = 'ListView';

const ListViewPage = ({ location }) => {
  // injectors
  useInjectReducer({ key: ListViewKeyOnRedux, reducer: ListViewReducer });
  useInjectSaga({ key: ListViewKeyOnRedux, saga: ListViewSaga });

  // local states
  const [page, setPage] = useState(0);

  // bounded redux actions
  const [getListData, resetListData] = useBindDispatch([
    getListDataAction,
    resetListDataAction,
  ]);

  // redux store
  const { loading, error, data = {} } = useSelector(
    state => state[ListViewKeyOnRedux] || initialState,
  );

  // did mount
  useEffect(() => {
    // getNextPage(page);
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  /** requestPage api Call */
  const getNextPage = useCallback(() => {
    /** INCREMENT PAGE */
    const newPageIndex = page + 1;
    setPage(newPageIndex);

    /** get Default parametrs */
    const { pageLimit } = globalConfigs;

    /** make query String */
    const { search } = location;
    const parsedQueryString = qs.parse(search.slice(1));

    getListData({ pageLimit, page: newPageIndex, parsedQueryString });
  }, [page]);

  const handleNextPage = useCallback(() => {
    const nextPageIndex = page + 1;
    getNextPage(nextPageIndex);
  }, [page]);

  /** COMPONENT WILL UNMOUNT */
  useEffect(
    () => () => {
      console.log(initialState);
      resetListData(initialState);
    },
    [],
  );

  return (
    <ListViewLayout>
      <Title>{data && data.category && data.category.name_fa}</Title>
      <ListWrapper>
        {data &&
          data.items.length > 0 &&
          data.items.map(item => <MovieItem key={item.id} {...item} />)}
      </ListWrapper>

      <WayPointArea>
        <Waypoint onEnter={handleNextPage} />
      </WayPointArea>
    </ListViewLayout>
  );
};

export default ListViewPage;
