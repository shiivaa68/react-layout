import React from 'react';
import { FormattedMessage } from 'react-intl';
import  messages  from '../messages';

import {MovieInformationStyle} from '../styles';

const SeriesInformaion = ({imdb_rank,country,languages,countryUtility})=>
{
  const countrySeries = countryUtility && countryUtility.length>0 && countryUtility.find(countryElement => countryElement.country_code === country);
console.log({country})

    return(
        <MovieInformationStyle>
      
        <div>
          <i className="fa fa-imdb"/> <span>{imdb_rank}</span>
        </div>
        <div>
          <span>{countrySeries && countrySeries.country_fa}</span>
        </div>
      </MovieInformationStyle>

    )
}
export default SeriesInformaion;