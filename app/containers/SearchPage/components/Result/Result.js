import React, { useMemo, useCallback, useState, useEffect } from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { useSelector } from 'react-redux';
import { MovieItem } from 'components/kit';
import Casts from 'components/Casts';
import { Waypoint } from 'react-waypoint';
import SEARCH_TYPES from 'constants/SearchTypes';

import ResultTab from './ResultTab';

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

const Result = () => {
  const {
    data: { movies_data, series_data, casts_data },
    action: { handleNextPage },
  } = useSearchContext();

  const [selectedTabID, setSelectedTabID] = useState(1);

  const TabTypes = useMemo(() => {
    return [
      { id: 1, name: SEARCH_TYPES.MOVIES, label: 'فیلم ها' },
      { id: 2, name: SEARCH_TYPES.SERIES, label: 'سریال ها' },
      { id: 3, name: SEARCH_TYPES.CASTS, label: 'عوامل' },
    ];
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

  return (
    <ResultWrapper>
      <ResultTab
        TabTypes={TabTypes}
        selectedTabID={selectedTabID}
        handleActiveButton={handleActiveButton}
      />

      {selectedTabID === 1 && (
        <SearchMovieLayout>
          <SearchMovieWrapper>
            {movies_data &&
              movies_data.length > 0 &&
              movies_data.map(item => <MovieItem key={item.id} {...item} />)}
          </SearchMovieWrapper>

          <WayPointArea>
            <Waypoint onEnter={handleNextPage} />
          </WayPointArea>
        </SearchMovieLayout>
      )}

      {selectedTabID === 2 && (
        <SearchSeriesLayout>
          <SearchSeriesWrapper>
            {series_data &&
              series_data.length > 0 &&
              series_data.map(item => <MovieItem key={item.id} {...item} />)}
          </SearchSeriesWrapper>
        </SearchSeriesLayout>
      )}

      {selectedTabID === 3 && (
        <CastWrapper>
          {casts_data &&
            casts_data.length > 0 &&
            casts_data.map((cast, i) => (
              <Container key={i}>
                <Image>
                  <img src={cast.profile_picture} />
                </Image>
                <DescriptionCast>
                  <Title>{cast.fullname_fa}</Title>
                </DescriptionCast>
              </Container>
            ))}
        </CastWrapper>
      )}
    </ResultWrapper>
  );
};

export default Result;
