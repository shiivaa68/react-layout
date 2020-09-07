import React from 'react';
import { FormattedMessage } from 'react-intl';
import  messages  from '../messages';

import {MyBadgeValue, MovieInformationStyle, MyBadge} from '../styles';

const SeriesInformaion = ({imdb_rank,country,languages,countryUtility})=>
{
  const countrySeries = countryUtility && countryUtility.length>0 && countryUtility.find(countryElement => countryElement.country_code === country);


    return(
        <MovieInformationStyle>
      
      <MyBadgeValue>{imdb_rank}</MyBadgeValue>
        <MyBadge>
        <span>imdb</span>
        </MyBadge>
        <MyBadge>
        <span>{countrySeries && countrySeries.country_fa}</span>
        </MyBadge>
      </MovieInformationStyle>

    )
}
export default SeriesInformaion;