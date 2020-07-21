import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../kit/Button';
import  messages  from './messages';
import MovieInformation from './Component/MovieInformation';
import SeriesInformaion from './Component/SeriesInformaion';
import Genres from './Component/Genres';
import RangeAge from './Component/RangeAge';

import {
  HeadingCoverContainer,
  CoverImage,
  CoverDetails,
  Title,
  Description,
  ControlButton,
  MoreInfo,
  MoreDetailInformation,
} from './styles';

const HeadingCover = ({
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
  
}) => {
  
  const coverImage = useMemo(
    () => screenshots && screenshots[screenshots.length - 1],
    [screenshots],
  );

  return (
   
    <HeadingCoverContainer>
      {type ==='MOVIE' &&  <CoverImage  src={coverImage} /> } 
      {type === 'SERIES' &&<CoverImage src={poster_path} />} 
    

      <CoverDetails>
        <Title>{title_fa}</Title>
        {type ==='MOVIE' &&  <MovieInformation publish_date={publish_date} movie_length={movie_length} imdb_rank={imdb_rank} countryUtility={countryUtility} country={country} quality={quality} languages={languages} default_origin={default_origin} default_voice={default_voice} />}
        {type ==='SERIES' &&  <SeriesInformaion   imdb_rank={imdb_rank} country={country} countryUtility={countryUtility}  languages={languages} />}

        <Description>{description}</Description>
       
        {type === 'MOVIE' &&  <ControlButton>
          <Button
            type="fullfill"
            label={<FormattedMessage {...messages.playFilm} />} 
            // onClick=""
             />
        </ControlButton> }

        <MoreInfo>
        <Genres genresUtility={genresUtility}  genres={genres}/>
        <RangeAge  age_range={age_range} agerange={agerange} />
        </MoreInfo>

        {/* <MoreDetailInformation>
      
           <Button
            type="fullfill"
            label={<FormattedMessage {...messages.review} />} 
            // onClick=""
             />
               <Button
            type="fullfill"
            label={<FormattedMessage {...messages.rewards} />} 
            // onClick=""
             />
        </MoreDetailInformation>
       */}
      </CoverDetails>
    </HeadingCoverContainer>
  );
};

export default HeadingCover;
