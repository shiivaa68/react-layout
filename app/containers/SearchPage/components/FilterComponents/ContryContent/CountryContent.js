import React, { useEffect } from 'react';
import useSearchContext from 'containers/SearchPage/context';
import { Checkbox } from 'components/kit';
import { CountryWrapper } from './styles';

const CountryContent = () => {
  const {
    data: { country, selectedCountries },
    action: { handleSetSelectedContries },
  } = useSearchContext();

  useEffect(() => {
    console.log({ country });
  }, [country]);

  return (
    <CountryWrapper>
      {country.map(item => (
        <Checkbox
          key={item.id}
          {...item}
          id={item.id}
          label={item.country_fa}
          checked={selectedCountries.map(el => el.id).includes(item.id)}
          onChange={handleSetSelectedContries}
        />
      ))}
    </CountryWrapper>
  );
};

export default CountryContent;
