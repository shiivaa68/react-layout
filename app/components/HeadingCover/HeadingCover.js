import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../kit/Button';
import { messages } from './messages';

import {
  HeadingCoverContainer,
  CoverImage,
  CoverDetails,
  Title,
  MovieInformation,
  Description,
  ControlButton,
} from './styles';

const HeadingCover = ({
  type,
  screenshots,
  title_fa,
  publish_date,
  movie_length,
  imdb_rank,
  country,
  quality,
  description,
}) => {
  const coverImage = useMemo(() => screenshots && screenshots[screenshots.length - 1], [screenshots]);

  return (
    <HeadingCoverContainer>
      <CoverImage src={coverImage} />

      <CoverDetails>
        <Title>{title_fa}</Title>
        <MovieInformation>
          <div>
            <span>{publish_date}</span>
          </div>
          <div>
            {' '}
            <span>{movie_length} دقیقه</span>
          </div>
          <div>
            <i className="fa fa-imdb" /> <span>{imdb_rank}</span>
          </div>
          <div>
            <span>{country}</span>
          </div>
          <div>
            {' '}
            <i className="fa fa-microphone" />
            <span />
          </div>
          <div>
            {' '}
            کیفیت <span> {quality} </span>
          </div>
        </MovieInformation>
        <Description>{description}</Description>
        <ControlButton>
          <Button
            type="fullfill"
            label="ورود و پخش فیلم"
            // onClick={handleBuyPkgRoute}
          />
          <Button
            type="outfill"
            label="دانلود"
            // onClick={handleSigninRoute}
          />
        </ControlButton>
      </CoverDetails>
    </HeadingCoverContainer>
  );
};

export default HeadingCover;
