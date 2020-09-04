import React, { useEffect } from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { Checkbox } from 'components/kit';
import { CountryWrapper } from './styles';

const CountryContent = () => {
  const {
    data: { country, selectedCountries },
    action: { handleSetSelectedContries },
  } = useSearchContext();


  return (
    <CountryWrapper>
      {country.map(item => (
        <Checkbox
          key={item.id}
          {...item}
          id={item.id}
          label={item.country_fa}
          checked={ item.id === selectedCountries.id}
          onChange={handleSetSelectedContries}
        />
      ))}
    </CountryWrapper>
  );
};

export default CountryContent;
