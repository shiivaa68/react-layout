import React, { useState, useEffect, useMemo, useCallback } from 'react';

import SerieSuggestions from 'containers/SerieSuggestions';
import HeadingCover from 'components/HeadingCover';
import Casts from 'components/Casts';
import EpisodeControl from 'components/EpisodeControl';
import EpisodeSeries from 'components/EpisodeSeries';

import { useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import SeriesPageReducer from './redux/reducer';
import seriesPageSaga from './redux/saga';
import { getSeriesAction } from './redux/actions';
import initialState from './redux/initialState';

import { SeriesContainer } from './styles';

const SeriesPageKeyOnRedux = 'SeriesPage';

const SeriesPage = ({ match }) => {
  /** injectors  */
  useInjectReducer({ key: SeriesPageKeyOnRedux, reducer: SeriesPageReducer });
  useInjectSaga({ key: SeriesPageKeyOnRedux, saga: seriesPageSaga });

  /** local states  */
  const [activeSeasonId, setActiveSeasonId] = useState(null);

  /** bounded redux actions */
  const [getSeriesPage] = useBindDispatch([getSeriesAction]);

  /** store data */
  const { loading, error, data = [] } = useSelector(
    state => state[SeriesPageKeyOnRedux] || initialState,
  );
  const { rols = [] } = useSelector(state => state.global);
  const { languages = [] } = useSelector(state => state.global);
  const {agerange =[] } = useSelector(state=>state.global);
  const {genres =[]} = useSelector(state =>state.global );
  const {country =[]} = useSelector(state =>state.global );

  /** efects */
  useEffect(() => {
    const id = match.params.serieId;
    getSeriesPage({ id });
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    if (data && data.seasons && data.seasons.length > 0) {
      const activeSeasonId = data.seasons[0].id;
      setActiveSeasonId(activeSeasonId);
    }
  }, [data]);

  /** handlers */
  const handleSetActiveSeason = useCallback(
    selectedId => {
      setActiveSeasonId(selectedId);
    },
    [activeSeasonId, setActiveSeasonId],
  );

  const activeSeasonEpisodes = useMemo(() => {
    const result =
      data &&
      data.seasons &&
      data.seasons.length > 0 &&
      data.seasons.filter(season => season.id === activeSeasonId)[0];

    return result && result.episodes.length > 0 ? result.episodes : [];
  }, [data, activeSeasonId]);

  return (
    <SeriesContainer>
      <HeadingCover type="SERIES" {...data} languages={languages} agerange={agerange} genresUtility={genres} countryUtility={country}/>
      <EpisodeControl
        activeSeasonId={activeSeasonId}
        seasons={data.seasons}
        handleSetActiveSeason={handleSetActiveSeason}
      />
      <EpisodeSeries episodes={activeSeasonEpisodes} />
      <Casts type="SERIES" casts={data.casts || []} rols={rols} />
      <SerieSuggestions
        type="SERIES"
        {...data}
        serieId={match.params.serieId}
      />
    </SeriesContainer>
  );
};

export default SeriesPage;