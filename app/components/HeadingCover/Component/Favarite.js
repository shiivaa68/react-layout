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

import useMoviePageContext from 'containers/MoviesPage/context';

const Favarite = ({ type, data_movie_favarite, match }) => {

  let {
    data,
    actions: { handleMovieLikeDislike,handleMovieSetBookmark,handleMovieDelBookmark },
  } = useMoviePageContext() || {data:{}};

  const handleLikeDislikeClick = useCallback(
    likeType => {
      switch (type) {
        case 'MOVIE':
          const {
            params: { movieId },
          } = match;

          if (likeType === 'LIKE') handleMovieLikeDislike(movieId, 10);
          else if (likeType === 'DISLIKE') handleMovieLikeDislike(movieId, 1);
          break;

    
        default:
          break;
      }
    },
    [type],
  );

  const handlelBookMarkClick = useCallback(
    bookmarkType => {
      switch (type) {
        case 'MOVIE':
          const {
            params: { movieId },
          } = match;

          if (bookmarkType === 'BOOKMARK') handleMovieSetBookmark(movieId);
          else if (bookmarkType === 'UNBOOKMARK') handleMovieDelBookmark(movieId);
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
    if (data.user_favorite === null) return false;
    if (data.user_favorite === true) return true;
    else return false;
  }, [data]);

  const isUserDisBookmark = useMemo(() => {
    if (data.user_favorite === null) return false;
    if (data.user_favorite === false ) return true;
    else return false;
  }, [data]);



  return (
    <WrapperFavarite>
      <ContainerBookmark >
        {data.user_favorite ? (<div onClick={()=>handlelBookMarkClick('UNBOOKMARK')}> <Img
            src={BOOKMARKFILL}
            width="30"
            height="25"
          /></div>
       
          ) :(<div  onClick={()=>handlelBookMarkClick('BOOKMARK')}> <Img
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
export default withRouter(Favarite);
