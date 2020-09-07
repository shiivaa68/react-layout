import React, { useMemo, useEffect, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import messages from '../messages';
import BOOKMARK from 'images/bookmark.svg';
import BOOKMARKFILL from 'images/bookmarkfill.svg';
import LIKE_FILL from 'images/like-fill.svg';
import LIKE_STROKE from 'images/like-stroke.svg';
import DISLIKE_FILL from 'images/dislike-fill.svg';
import DISLIKE_STROKE from 'images/dislike-stroke.svg';
import Img from 'react-cool-img';
import {
  WrapperFavarite,
  ContainerBookmark,
  ContainerFavarite,
  WrapLike,
  WrapDislike,
} from '../styles';

import useSeriesPageContext from 'containers/SeriesPage/context';

const FavariteSeries = ({ type, data_favarite_series, match }) => {

  let {
    data,
    actions: { handleSeriesLikeDislike,handleSeriesSetBookmark,handleSeriesDelBookmark },
  } = useSeriesPageContext() || {data:{}};


  const handleLikeDislikeClick = useCallback(
    likeType => {
      switch (type) {
        case 'SERIES':
          const {
            params: { serieId },
          } = match;
          
          if (likeType === 'LIKE') handleSeriesLikeDislike(serieId, 10);
          else if (likeType === 'DISLIKE') handleSeriesLikeDislike(serieId, 1);
          break;

        
        default:
          break;
      }
    },
    [type],
  );

  const handlelBookMarkSeriesClick = useCallback(
    bookmarkType => {
      switch (type) {
        case 'SERIES':
          const {
            params: { serieId },
          } = match;

          if (bookmarkType === 'BOOKMARK') handleSeriesSetBookmark(serieId);
          
          else if (bookmarkType === 'UNBOOKMARK') handleSeriesDelBookmark(serieId);
          break;


        default:
          break;
      }
    },
    [type],
  );


  const isUserLiked = useMemo(() => {
    if (data.user_rank === null) return false;

    if (data.user_rank > 1) return true;
    else return false;
  }, [data]);

  const isUserDisLiked = useMemo(() => {
    if (data.user_rank === null) return false;
    if (data.user_rank <= 1) return true;
    else return false;
  }, [data]);

  const isUserBookmark = useMemo(() => {
    if (data.favorite === null) return false;
    if (data.favorite === true) return true;
    else return false;
  }, [data]);

  const isUserDisBookmark = useMemo(() => {
    if (data.favorite === null) return false;
    if (data.favorite === false ) return true;
    else return false;
  }, [data]);


  return (
    <WrapperFavarite>
      <ContainerBookmark>
      {data.favorite ? (<div onClick={()=>handlelBookMarkSeriesClick('UNBOOKMARK')}> <Img
            src={BOOKMARKFILL}
            width="30"
            height="25"
          /></div>
       
          ) :(<div  onClick={()=>handlelBookMarkSeriesClick('BOOKMARK')}> <Img
            src={ BOOKMARK}
            width="30"
            height="25"
          /></div>
         
          )}
      </ContainerBookmark>

      <ContainerFavarite>
        <WrapLike onClick={() => handleLikeDislikeClick('LIKE')}>
          <Img
            src={isUserLiked ? LIKE_FILL : LIKE_STROKE}
            width="30"
            height="25"
          />
        </WrapLike>

        <WrapDislike onClick={() => handleLikeDislikeClick('DISLIKE')}>
          <Img
            src={isUserDisLiked ? DISLIKE_FILL : DISLIKE_STROKE}
            width="30"
            height="25"
          />
        </WrapDislike>
      </ContainerFavarite>
    </WrapperFavarite>
  );
};
export default withRouter(FavariteSeries);
