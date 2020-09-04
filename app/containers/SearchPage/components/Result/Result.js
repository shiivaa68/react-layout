import React, { useMemo, useCallback, useState, useEffect } from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { useSelector } from 'react-redux';
import { MovieItem } from 'components/kit';
import Casts from 'components/Casts';
import { Waypoint } from 'react-waypoint';
import SEARCH_TYPES from 'constants/SearchTypes';

import ResultTab from './ResultTab';
import LoadingIndicator from 'components/LoadingIndicator';

import {
  ResultWrapper,
  SearchMovieLayout,
  SearchMovieWrapper,
  SearchSeriesLayout,
  SearchSeriesWrapper,
  CastWrapper,
  Container,
  Image,
  DescriptionCast,
  Title,
  WayPointArea,
} from './styles';
import Img from 'react-cool-img';
import { withRouter } from 'react-router-dom';
import { PublicRoutes } from 'utils/routes'

const Result = ({history}) => {
  const {
    data: { movies_data, series_data, casts_data,movies_loading, series_loading, casts_loading },
    action: { handleNextPage },
  } = useSearchContext();

  const [selectedTabID, setSelectedTabID] = useState(0);

  const TabTypes = useMemo(() => {
    return [
      { id: 1, name: SEARCH_TYPES.MOVIES, label: 'فیلم ها' },
      { id: 2, name: SEARCH_TYPES.SERIES, label: 'سریال ها' },
      { id: 3, name: SEARCH_TYPES.CASTS, label: 'عوامل' },
    ];
  }, []);

  useEffect(() => {
    window.addEventListener('CHANGE_TYPE_EVENT', e => {
      const { id } = e.detail;
      setSelectedTabID(id);
    });
  }, []);
  const handleActiveButton = useCallback(
    tabId => {
      setSelectedTabID(tabId);

      /** CHANGE_TAB_EVENT */
      const targetTab = TabTypes.find(tab => tab.id === tabId);
      const changeTabEvent = new CustomEvent('CHANGE_TAB_EVENT', {
        detail: { targetTab },
      });
      dispatchEvent(changeTabEvent);
    },
    [selectedTabID, setSelectedTabID],
  );

  const callCast = useCallback((id) => 
  history.push(PublicRoutes.castDetailsRoute(id)));
  return (
    <ResultWrapper>
      <ResultTab
        TabTypes={TabTypes}
        selectedTabID={selectedTabID}
        handleActiveButton={handleActiveButton}
      />
      {
      selectedTabID === 1 && (
        <SearchMovieLayout>
          <SearchMovieWrapper>
            {movies_data &&
              movies_data.length > 0 &&
              movies_data.map(item => <MovieItem clickable type='MOVIE' key={item.id} {...item} />)}
          </SearchMovieWrapper>
          {movies_loading && <LoadingIndicator marginTop={'1rem'}/>}

          <WayPointArea>
            <Waypoint onEnter={handleNextPage} />
          </WayPointArea>
        </SearchMovieLayout>
      )}

{
      selectedTabID === 2 && (
        <SearchSeriesLayout>
          <SearchSeriesWrapper>
            {series_data &&
              series_data.length > 0 &&
              series_data.map(item => <MovieItem clickable type='SERIES' key={item.id} {...item} />)}
          </SearchSeriesWrapper>
          {series_loading && <LoadingIndicator marginTop={'1rem'}/> }

          <WayPointArea>
            <Waypoint onEnter={handleNextPage} />
          </WayPointArea>
        </SearchSeriesLayout>
      )}

{
      selectedTabID === 3 && (
        <CastWrapper>
          {casts_data &&
            casts_data.length > 0 &&
            casts_data.map((cast, i) => (
              <Container onClick={() => callCast(cast.id)} key={i}>
                <Image>
                  <Img src={cast.profile_picture} />
                </Image>
                <DescriptionCast>
                  <Title>{cast.fullname_fa}</Title>
                </DescriptionCast>
              </Container>
            ))}
                      {casts_loading && <LoadingIndicator marginTop={'1rem'}/>}

          <WayPointArea>
            <Waypoint onEnter={handleNextPage} />
          </WayPointArea>
        </CastWrapper>
      )}
    </ResultWrapper>
  );
};

export default withRouter(Result);
