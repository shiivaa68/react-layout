import React, { useState, useCallback } from 'react';

import Img from 'react-cool-img';
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
  CommentArea,
  ReplyArea,
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
  total_replies,
}) => {
  const [replyPage, setReplyPage] = useState(2);

  const {
    data,
    data: { activeCommentIdForReply },
    actions: {
      handleMovieLikeComment,
      handleSetReplyComment,
      handleActiveCommentForReply,
      handleLoadMoreReplyAPI,
    },
  } = useMoviePageContext() || { data: {} };

  const handlelikeMovieClick = useCallback(likeType => {
    if (likeType === 'LIKE') handleMovieLikeComment({ id, score: false });
    else if (likeType === 'DISLIKE')
      handleMovieLikeComment({ id, score: true });
  }, []);

  const handleLoadMoreReply = useCallback(() => {
    handleLoadMoreReplyAPI({ commentId: id, replyPage });
    setReplyPage(state => state + 1);
  }, [id, replyPage]);

  return (
    <CommentWrapper>
      <Container>
        <CommentArea>
          <Image>
            <Img src={avatar} />
          </Image>
          <Description>
            <Desuser>
              <span>{display_name}</span> -<span>{created_date}</span>
            </Desuser>
            <Text>{comment}</Text>

            {activeCommentIdForReply === id && <EnterReplyComment />}
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
                onClick={() => {
                  if (activeCommentIdForReply === id)
                    return handleActiveCommentForReply(-1);
                  handleActiveCommentForReply(id);
                }}
              />
            </div>
          </Favorite>
        </CommentArea>
        {Boolean(has_replay) ? (
          <ReplyArea>
            {replies.length > 0 &&
              replies.map(reply => <Reply key={reply.id} {...reply} />)}

            {total_replies > 10 && !(replies.length >= total_replies) && (
              <button onClick={handleLoadMoreReply}>GET_MORE_COMMENTS</button>
            )}
          </ReplyArea>
        ) : null}
        {/* {replies.length > 5 && <div>inja show bishtar...</div>} */}
      </Container>
    </CommentWrapper>
  );
};

export default CommentMovie;
