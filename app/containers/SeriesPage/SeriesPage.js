import React, { useState, useEffect, useMemo, useCallback } from 'react';

import SerieSuggestions from 'containers/SerieSuggestions';
import HeadingCover from 'components/HeadingCover';
import Casts from 'components/Casts';
import EpisodeSeries from 'components/EpisodeSeries';

import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import LoadingIndicator from 'components/LoadingIndicator';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import SeriesPageReducer from './redux/reducer';
import seriesPageSaga from './redux/saga';
import {
  getSeriesAction,
  getSeriesAwardsAction,
  getSeriesFavariteAction,
} from './redux/actions';
import initialState from './redux/initialState';

import useMyMediaQuery from '../../utils/useMyMediaQuery';
import { SeriesContainer } from './styles';

const SeriesPageKeyOnRedux = 'SeriesPage';

const SeriesPage = ({ match, history }) => {
  /** injectors  */
  useInjectReducer({ key: SeriesPageKeyOnRedux, reducer: SeriesPageReducer });
  useInjectSaga({ key: SeriesPageKeyOnRedux, saga: seriesPageSaga });

  /** local states  */
  const [activeSeasonId, setActiveSeasonId] = useState(null);

  /** bounded redux actions */
  const [getSeriesPage, getSeriesAwards, getSeriesFavarite] = useBindDispatch([
    getSeriesAction,
    getSeriesAwardsAction,
    getSeriesFavariteAction,
  ]);

  /** store data */
  const { loading, error, data = [], data_awards } = useSelector(
    state => state[SeriesPageKeyOnRedux] || initialState,
  );
  const { rols = [] } = useSelector(state => state.global);
  const { languages = [] } = useSelector(state => state.global);
  const { agerange = [] } = useSelector(state => state.global);
  const { genres = [] } = useSelector(state => state.global);
  const { country = [] } = useSelector(state => state.global);

  /** efects */
  useEffect(() => {
    const id = match.params.serieId;
    getSeriesPage({ id });
  }, [match.params.serieId]);

  useEffect(() => {
    const serieId = match.params.serieId;
    getSeriesAwards({ serieId });
  }, []);

  useEffect(() => {
    const serieId = match.params.serieId;
    // getSeriesFavarite({ serieId ,favariteSeries});
  }, []);

  useEffect(() => {
    if (data && data.seasons && data.seasons.length > 0) {
      const activeSeasonId = data.seasons[0].id;
      setActiveSeasonId(activeSeasonId);
    }
  }, [data]);

  /** handlers */
  const handleSetActiveSeason = useCallback(
    selected => {
      setActiveSeasonId(selected.id);
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

  const { isMobile } = useMyMediaQuery();
  return (
    <SeriesContainer>
      <Helmet>
        <title>{data.title_fa}</title>
        <meta name="description" content={'سریال' + data.title_fa} />
      </Helmet>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <HeadingCover
            activeSeasonId={activeSeasonId}
            handleSetActiveSeason={handleSetActiveSeason}
            data_awards={data_awards}
            isMobile={isMobile}
            type="SERIES"
            languages={languages}
            agerange={agerange}
            genresUtility={genres}
            countryUtility={country}
            {...data}
          />
          <EpisodeSeries history={history} episodes={activeSeasonEpisodes} />
          <Casts type="SERIES" casts={data.casts || []} rols={rols} />
          <SerieSuggestions
            type="SERIES"
            {...data}
            serieId={match.params.serieId}
          />
        </>
      )}
    </SeriesContainer>
  );
};

export default SeriesPage;
