import React from 'react';
import { FormattedMessage } from 'react-intl';
import  messages  from '../messages';

import IMDB_TV from '../../../images/imdb-tv.svg';
import IMDB from '../../../images/imdb.svg';

import {MyBadgeValue, MovieInformationStyle, MyBadge} from '../styles';

const MovieInformation = ({publish_date,movie_length,imdb_rank,country,quality,default_voice,languages,default_origin,countryUtility})=>
{

  const subtitleMovie = languages && languages.length >0 && languages.find(language=> language.id === default_voice);

  const countryMovie = countryUtility && countryUtility.length>0 && countryUtility.find(countryElement => countryElement.country_code === country);

    return(
        <MovieInformationStyle>

        <MyBadge>
          <span>{publish_date}</span>
        </MyBadge>
        <MyBadgeValue>{movie_length}`</MyBadgeValue>
        <MyBadge>
          <span> {<FormattedMessage {...messages.movie_length} />}</span>
        </MyBadge>
        <MyBadgeValue>{imdb_rank}</MyBadgeValue>
        <MyBadge>
        <span>imdb</span>
        </MyBadge>
        <MyBadge>
          <span>{countryMovie &&countryMovie.country_fa}</span>
        </MyBadge>

            {default_origin === "خارجی" && default_voice === 1 ?
              <MyBadge> <span>{<FormattedMessage {...messages.double} />}  </span></MyBadge>
            : default_origin === "ایرانی" && default_voice === 0 ?
            <MyBadge> <span>{<FormattedMessage {...messages.subtitle} />}</span></MyBadge>
            : null}
        <MyBadge>
        <span>{quality}</span>
        </MyBadge>
      </MovieInformationStyle>

    )
}
export default MovieInformation;