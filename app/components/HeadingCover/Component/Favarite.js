import React, { useMemo, useEffect, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import messages from '../messages';
import BOOKMARK from 'images/bookmark.svg';
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
  const {
    data,
    actions: { handleMovieLikeDislike },
  } = useMoviePageContext();

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

        case 'SERIES':
          const {
            params: { serieId },
          } = match;
          console.log({ type, serieId });
          // TODO:
          //  - handle like dislike for series
          break;

        default:
          break;
      }
    },
    [type],
  );

  const handleBookmrak = useCallback(() => {
    console.log('inja like bookmark');
  }, []);

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

  return (
    <WrapperFavarite>
      <ContainerBookmark onClick={handleBookmrak}>
        <Img src={BOOKMARK} width="30" height="25" />
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
