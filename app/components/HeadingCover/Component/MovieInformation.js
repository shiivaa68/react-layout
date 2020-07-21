import React from 'react';
import { FormattedMessage } from 'react-intl';
import  messages  from '../messages';

import {MovieInformationStyle} from '../styles';

const MovieInformation = ({publish_date,movie_length,imdb_rank,country,quality,default_voice,languages,default_origin,countryUtility})=>
{

  const subtitleMovie = languages && languages.length >0 && languages.find(language=> language.id === default_voice);

  const countryMovie = countryUtility && countryUtility.length>0 && countryUtility.find(countryElement => countryElement.country_code === country);

    return(
        <MovieInformationStyle>
        <div>
          <span>{publish_date}</span>
        </div>
        <div>
          <span>{movie_length}  {<FormattedMessage {...messages.movie_length} />}</span>
        </div>
        <div>
          <i className="fa fa-imdb" /> <span>{imdb_rank}</span>
        </div>
        <div>
          <span>{countryMovie &&countryMovie.country_fa}</span>
        </div>

          <div>
            {default_origin === "خارجی" && default_voice === 1 ?
              <i className="fa fa-microphone" > {` `} {<FormattedMessage {...messages.double} />} </i>
            : default_origin === "ایرانی" && default_voice === 0 ?
             <i className="fa fa-microphone" >{<FormattedMessage {...messages.subtitle} />}</i>
            : null}
          </div>

        <div>
          {subtitleMovie && subtitleMovie.value}
        </div>
        <div>
        {<FormattedMessage {...messages.quality} />} <span> {quality} </span>
        </div>
      </MovieInformationStyle>

    )
}
export default MovieInformation;