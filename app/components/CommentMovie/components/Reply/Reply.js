import React, { useCallback } from 'react';
import FAVARITE from 'images/favorite.svg';
import FAVARITE_BORDER from 'images/favorite_border.svg';
import Img from 'react-cool-img';

import useMoviePageContext from 'containers/MoviesPage/context';
import {
  ReplyWrapper,
  Container,
  Image,
  Description,
  Favorite,
  Text,
  Desuser,
} from './styles';

const Reply = ({
  id,
  commentId,
  avatar,
  comment,
  created_date,
  display_name,
  has_replay,
  your_score,
  score,
}) => {
  // console.log(id,'man to reply ghalbam')
  const {
    data,
    actions: { handleReplyLike },
  } = useMoviePageContext() || { data: {} };

  const handleLikeReply = useCallback(likeType => {
    if (likeType === 'LIKE')
      handleReplyLike({ commentId, replyId: id, score: false });
    else if (likeType === 'DISLIKE')
      handleReplyLike({ commentId, replyId: id, score: true });
  }, []);

  return (
    <ReplyWrapper>
      <Container>
        <Image>
          <Img src={avatar} />
        </Image>
        <Description>
          <Desuser>
            <span>{display_name}</span>
            <span>{created_date}</span>
          </Desuser>
          <Text>{comment}</Text>
        </Description>
        <Favorite>
          <div>
            {your_score === 1 ? (
              <div onClick={() => handleLikeReply('LIKE')}>
                <Img src={FAVARITE} width="30" height="25" />
              </div>
            ) : (
              <div onClick={() => handleLikeReply('DISLIKE')}>
                <Img src={FAVARITE_BORDER} width="30" height="25" />
              </div>
            )}
          </div>
          <div>
            <span>{score}</span>
          </div>
        </Favorite>
      </Container>
    </ReplyWrapper>
  );
};

export default Reply;
