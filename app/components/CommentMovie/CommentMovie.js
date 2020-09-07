import React, { useCallback, useMemo } from 'react';

import Img from 'react-cool-img';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FAVARITE from 'images/favorite.svg';
import FAVARITE_BORDER from 'images/favorite_border.svg';
import REPLY from 'images/reply.svg';
import {
  CommentWrapper,
  Container,
  Image,
  Description,
  Text,
  Favorite,
  Desuser,
} from './styles';
import Reply from './components/Reply';
import useMoviePageContext from 'containers/MoviesPage/context';
import EnterReplyComment from './components/EnterReplyComment';
const CommentMovie = ({
  id,
  avatar,
  comment,
  created_date,
  display_name,
  has_replay,
  your_score,
  score,
  replies,
}) => {
  const {
    data,
    data: { activeCommentIdForReply },
    actions: {
      handleMovieLikeComment,
      handleSetReplyComment,
      handleActiveCommentForReply,
    },
  } = useMoviePageContext() || { data: {} };

  // console.log({
  //   data,
  //   isTrue: activeCommentIdForReply === id,
  //   activeCommentIdForReply,
  //   id,
  // });

  const handlelikeMovieClick = useCallback(likeType => {
    if (likeType === 'LIKE') handleMovieLikeComment({ id, score: false });
    else if (likeType === 'DISLIKE')
      handleMovieLikeComment({ id, score: true });
  }, []);

  return (
    <CommentWrapper>
      <Container>
        <Image>
          <Img src={avatar} />
        </Image>
        <Description>
          <Desuser>
            <span>{display_name}</span> -<span>{created_date}</span>
          </Desuser>
          <Text>{comment}</Text>

          {activeCommentIdForReply === id && <EnterReplyComment />}

          <div>
            {replies.length > 0 &&
              replies.map(reply => <Reply key={reply.id} {...reply} />)}
          </div>
        </Description>
        <Favorite>
          <div>
            {your_score === 1 ? (
              <div onClick={() => handlelikeMovieClick('LIKE')}>
                <Img src={FAVARITE} width="30" height="25" />
              </div>
            ) : (
              <div onClick={() => handlelikeMovieClick('DISLIKE')}>
                <Img src={FAVARITE_BORDER} width="30" height="25" />
              </div>
            )}
          </div>
          <div>
            <span>{score}</span>
          </div>
          <div>
            <Img
              src={REPLY}
              width="20"
              height="20"
              onClick={() => handleActiveCommentForReply(id)}
            />
          </div>
        </Favorite>
      </Container>
    </CommentWrapper>
  );
};

export default CommentMovie;
