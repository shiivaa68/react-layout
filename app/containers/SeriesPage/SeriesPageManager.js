import React, { useState, useEffect, useMemo, useCallback } from 'react';

import { useSelector } from 'react-redux';
import globalConfigs from 'utils/globalConfigs';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import SeriesPageReducer from './redux/reducer';
import seriesPageSaga from './redux/saga';
import {
  getSeriesAction,
  getSeriesAwardsAction,
  updateSeriesRankAction,
  getSeriesBookmarkAction,
  getSeriesBookmarkDelAction,
  getCommentSeriesAction,
  setCommentSeriesAction,
  setSeriesLikeAction,
  
} from './redux/actions';
import initialState from './redux/initialState';

import useMyMediaQuery from '../../utils/useMyMediaQuery';

const SeriesPageKeyOnRedux = 'SeriesPage';

const SeriesPageManager = ({ match }) => {
  useInjectReducer({ key: SeriesPageKeyOnRedux, reducer: SeriesPageReducer });
  useInjectSaga({ key: SeriesPageKeyOnRedux, saga: seriesPageSaga });

  /** local states  */
  const [activeSeasonId, setActiveSeasonId] = useState(null);

  const [getSeriesPage, getSeriesAwards, updateSeriesRank,getSeriesBookmark,getSeriesBookmarkDel ,getCommentSeries,setCommentSeries,setSeriesLike] = useBindDispatch([
    getSeriesAction,
    getSeriesAwardsAction,
    updateSeriesRankAction,
    getSeriesBookmarkAction,
    getSeriesBookmarkDelAction,
    getCommentSeriesAction,
    setCommentSeriesAction,
    setSeriesLikeAction,
  ]);

  const { loading, error, data = [], data_awards, data_favarite_series,comment_series, error_comment,
    loading_send_comment,
    send_comment} = useSelector(
    state => state[SeriesPageKeyOnRedux] || initialState,
  );

  const { rols = [] } = useSelector(state => state.global);
  const { languages = [] } = useSelector(state => state.global);
  const { agerange = [] } = useSelector(state => state.global);
  const { genres = [] } = useSelector(state => state.global);
  const { country = [] } = useSelector(state => state.global);

  useEffect(() => {
    const serieId = match.params.serieId;
    const { pageLimit } = globalConfigs;

    const options = {
      limit: pageLimit,
    };
    getSeriesPage({ id: serieId });
    getSeriesAwards({ serieId });
    getCommentSeries({ serieId, options });
  }, [match.params.serieId]);

  useEffect(() => {
    if (data && data.seasons && data.seasons.length > 0) {
      const activeSeasonId = data.seasons[0].id;
      setActiveSeasonId(activeSeasonId);
    }
  }, [data]);

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

  const handleSeriesLikeDislike = useCallback((serieId, rank) => {
    updateSeriesRank({ serieId, rank });
  }, []);


  const handleSeriesSetBookmark = useCallback((serieId) => {
   
    getSeriesBookmark({ serieId });
  }, []);

  const handleSeriesDelBookmark = useCallback((serieId) => {
   
    getSeriesBookmarkDel({ serieId });
  }, []);

  /** Handlers */
  const handleSetSeriesComment = useCallback(({ comment }) => {
    
    const serieId = match.params.serieId;
    console.log({ comment,serieId })
    setCommentSeries({ comment,serieId });
  }, []);

  //LIKE
  const handleSeriesLikeComment = useCallback(( {score,id}) => {
    console.log({score},'injaaa movie manager');
    setSeriesLike({ id, score });
  }, []);


  return {
    data: {
      loading,
      error,
      data,
      error_comment,
      loading_send_comment,
      data_awards,
      isMobile,
      activeSeasonId,
      handleSetActiveSeason,
      activeSeasonEpisodes,
      data_favarite_series,
      comment_series,
      rols,
      languages,
      agerange,
      genres,
      country,
    },
    actions: {
      handleSeriesLikeDislike,
      handleSetActiveSeason,
      handleSeriesSetBookmark,
      handleSeriesDelBookmark,
      handleSetSeriesComment,
      handleSeriesLikeComment,
    },
  };
};

export default SeriesPageManager;
