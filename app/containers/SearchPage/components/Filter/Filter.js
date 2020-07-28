import React, { useState, useMemo, useCallback } from 'react';
import { Button } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FilterContainer } from './styles';
import FilterBox from './SubComponents/FilterBox';
import useSearchContext from 'containers/SearchPage/context';

import { FormattedMessage } from 'react-intl';
import messages from '../../messages';

const Filter = () => {
  const [shouldShowFilter, setShoulsShowFilter] = useState(true);

  const {
    data: {
      selectedSearchTypes,
      selectedGenres,
      selectedCountries,
      selectedAgeRange,
      selectedSubtitle,
    },
  } = useSearchContext();

  const searchItems = useMemo(() => {
    const results = [];

    console.log({
      selectedSearchTypes,
      selectedGenres,
      selectedCountries,
      selectedAgeRange,
      selectedSubtitle,
    });

    return [];
  }, [
    selectedSearchTypes,
    selectedGenres,
    selectedCountries,
    selectedAgeRange,
    selectedSubtitle,
  ]);

  const handleShowFilter = useCallback(() => {
    setShoulsShowFilter(state => !state);
  }, [setShoulsShowFilter]);

  return (
    <FilterContainer>
      <Button
        onClick={handleShowFilter}
        type={ButtonTypes.FULLFILL}
        keepActive={shouldShowFilter}
        label={<FormattedMessage {...messages.filter} />}
      />
      {searchItems.map(el => (
        <span>x</span>
      ))}
      {shouldShowFilter && <FilterBox />}
    </FilterContainer>
  );
};

export default Filter;
