import React, { useMemo } from 'react';

import { HeadingCoverContainer, CoverImage, CoverDetails } from './styles';

const HeadingCover = ({ type, screenshots }) => {
  const coverImage = useMemo(() => {
    return screenshots && screenshots[screenshots.length - 1];
  }, [screenshots]);

  return (
    <HeadingCoverContainer>
      <CoverImage src={coverImage} />
      <CoverDetails>COVER_DETAILS</CoverDetails>
    </HeadingCoverContainer>
  );
};

export default HeadingCover;
