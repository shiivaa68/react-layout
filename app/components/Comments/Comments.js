import React, { useCallback } from 'react';

import Img from 'react-cool-img';

import { CommentWrapper, Container, Image, DescriptionCast } from './styles';

const Comments = ({
  avatar,
  comment,
  created_date,
  display_name,
  has_replay,
}) => {
  return (
    <CommentWrapper>
      <Container>
        <Image>
          <Img src={avatar} />
        </Image>
        <DescriptionCast>
          {/* <Title />
          <Role /> */}
          <h2>{display_name}</h2>
          <p>{comment}</p>
        </DescriptionCast>
      </Container>
    </CommentWrapper>
  );
};

export default Comments;
