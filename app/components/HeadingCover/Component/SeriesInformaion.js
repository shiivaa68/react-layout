import React from 'react';
import { FormattedMessage } from 'react-intl';
import  messages  from '../messages';

import {MovieInformationStyle} from '../styles';

const SeriesInformaion = ({imdb_rank,country,languages,countryUtility})=>
{
  const countrySeries = countryUtility && countryUtility.length>0 && countryUtility.find(countryElement => countryElement.country_code === country);


    return(
        <MovieInformationStyle>
      
        <div>
          <span>{imdb_rank}</span><span>IMDb</span>
        </div>
        <div>
          <span>{countrySeries && countrySeries.country_fa}</span>
        </div>
      </MovieInformationStyle>

    )
}
export default SeriesInformaion;