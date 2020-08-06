import React, { useState, useCallback, useMemo } from 'react';
import { MovieItem } from 'components/kit';
import ResultTab from './ResultTab';

import SEARCH_TYPES from 'constants/SearchTypes';
import useSearchContext from 'containers/SearchPage/context';

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
} from './styles';

const Result = () => {
  const {
    data: { movies_data, series_data, casts_data },
  } = useSearchContext();

  const [selectedTabID, setSelectedTabID] = useState(1);

  const TabTypes = useMemo(() => {
    return [
      { id: 1, name: SEARCH_TYPES.ALL, label: 'همه' },
      { id: 2, name: SEARCH_TYPES.MOVIES, label: 'فیلم ها' },
      { id: 3, name: SEARCH_TYPES.SERIES, label: 'سریال ها' },
      { id: 4, name: SEARCH_TYPES.CASTS, label: 'عوامل' },
    ];
  }, []);

  const handleActiveButton = useCallback(
    tabId => {
      setSelectedTabID(tabId);
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
              series_data &&
              movies_data.length > 0 &&
              series_data.length > 0 &&
              [...movies_data, ...series_data].map(item => (
                <MovieItem key={item.id} {...item} />
              ))}
          </SearchMovieWrapper>
        </SearchMovieLayout>
      )}

      {selectedTabID === 2 && (
        <SearchMovieLayout>
          <SearchMovieWrapper>
            {movies_data &&
              movies_data.length > 0 &&
              movies_data.map(item => <MovieItem key={item.id} {...item} />)}
          </SearchMovieWrapper>
        </SearchMovieLayout>
      )}

      {selectedTabID === 3 && (
        <SearchSeriesLayout>
          <SearchSeriesWrapper>
            {series_data &&
              series_data.length > 0 &&
              series_data.map(item => <MovieItem key={item.id} {...item} />)}
          </SearchSeriesWrapper>
        </SearchSeriesLayout>
      )}

      {selectedTabID === 4 && (
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
