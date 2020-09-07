import React, { useMemo, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../kit/Button';
import Modal from '../kit/Modal/Modal';
import BACK from 'images/back.jpg'
import BACK_MOBILE from 'images/back-mobile.jpg'

import AuthManager from 'containers/App/AuthManager';

import useModal from '../kit/Modal/useModal';
import messages from './messages';
import MovieInformation from './Component/MovieInformation';
import SeriesInformaion from './Component/SeriesInformaion';
import Genres from './Component/Genres';
import RangeAge from './Component/RangeAge';
import Favarite from './Component/Favarite';
import FavariteSeries from './Component/FavariteSeries';
import Select from '../kit/Select';

import {
  HeadingCoverContainer,
  CoverDetails,
  Title,
  Description,
  ControlButton,
  MoreInfo,
  ReviewBlankLink,
} from './styles';

const HeadingCover = ({
  activeSeasonId,
  handleSetActiveSeason,
  id,
  type,
  languages,
  agerange,
  genresUtility,
  screenshots,
  title_fa,
  publish_date,
  movie_length,
  imdb_rank,
  country,
  quality,
  description,
  default_voice,
  default_origin,
  poster_path,
  age_range,
  genres,
  countryUtility,
  isMobile,
  blog_link,
  data_movie,
  data_awards,
  history,
  seasons,
  data_movie_favarite,
  data_favarite_series,
  seriesId,
  movieId,
}) => {
  const coverImage = useMemo(
    () => screenshots && screenshots[screenshots.length - 1],
    [screenshots],
  );
  const { isShowing, toggle } = useModal();
  const { isLoggedIn } = AuthManager();

  const getBannerImgSrc = useCallback(() => {
    const path =
      type === 'MOVIE'
        ? coverImage
        : type === 'SERIES'
        ? poster_path
        : undefined;
    let sign = (path + '').includes('?') ? '&' : '?';
    // if (isMobile)
    //   return `${path+sign}platform=1&size=${window.innerWidth}x${parseInt(window.innerWidth * 12 / 15)}`
    // return `${path+sign}size=${1920}x${900}`
    if (isMobile)
      return BACK_MOBILE
    return BACK
  })

  function createMarkup(a) {
    return { __html: a };
  }

  const watchMovie = () => {
    history.push(`/watch/${id}`);
  };

  return (
    <HeadingCoverContainer>
      <CoverDetails img={getBannerImgSrc()}>
        <Title>{title_fa}</Title>
        {type === 'MOVIE' && (
          <MovieInformation
            publish_date={publish_date}
            movie_length={movie_length}
            imdb_rank={imdb_rank}
            countryUtility={countryUtility}
            country={country}
            quality={quality}
            languages={languages}
            default_origin={default_origin}
            default_voice={default_voice}
          />
        )}
        {type === 'SERIES' && (
          <SeriesInformaion
            imdb_rank={imdb_rank}
            country={country}
            countryUtility={countryUtility}
            languages={languages}
          />
        )}

        <Description dangerouslySetInnerHTML={createMarkup(description)} />
        <div style={{ marginBottom: '2rem' }}>
          {/* {
              description &&  blog_link && <ReviewBlankLink  href={blog_link}>  نقد و بررسی بیشتر... </ReviewBlankLink>
            } */}
          {description ? (
            blog_link ? (
              <ReviewBlankLink href={blog_link}>
                {' '}
                نقد و بررسی بیشتر...{' '}
              </ReviewBlankLink>
            ) : (
              <span>...</span>
            )
          ) : null}
        </div>
        {
          <ControlButton>
            {type === 'MOVIE' && (
              <Button
                type="fullfill"
                label={<FormattedMessage {...messages.playFilm} />}
                onClick={watchMovie}
              />
            )}

            {data_awards ? (
              data_movie ? (
                <Button
                  type="outfill"
                  label={<FormattedMessage {...messages.rewards} />}
                  onClick={toggle}
                />
              ) : (
                <Button
                  type="outfill"
                  label={<FormattedMessage {...messages.rewards} />}
                  onClick={toggle}
                />
              )
            ) : null}
            {/* {data_awards  && <Button
            type="outfill"
            label={<FormattedMessage {...messages.rewards} />} 
            onClick={toggle}/>} */}

            {/* onClick={toggle}/> */}
            {type === 'SERIES' && seasons && seasons.length > 0 && (
              <Select
                placeholder="انتخاب فصل"
                items={seasons}
                selectedId={activeSeasonId}
                handleSelect={handleSetActiveSeason}
              />
            )}
            <Modal
              isShowing={isShowing}
              hide={toggle}
              data_movie={data_movie}
              data_awards={data_awards}
            />
            {isLoggedIn && type === 'MOVIE' && (
              <  Favarite data_movie_favarite={data_movie_favarite} type={type} />
            )}

          {isLoggedIn && type === 'SERIES' && (
              <  FavariteSeries data_favarite_series={data_favarite_series} type={type} />
            )}
          </ControlButton>
        }

        <MoreInfo>
          <Genres genresUtility={genresUtility} genres={genres} />
          <RangeAge age_range={age_range} agerange={agerange} />
        </MoreInfo>
      </CoverDetails>
    </HeadingCoverContainer>
  );
};

export default HeadingCover;
