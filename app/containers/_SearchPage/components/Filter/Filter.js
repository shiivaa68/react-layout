import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Button } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import FilterBox from './SubComponents/FilterBox';
import ActiveFilterItem from './SubComponents/ActiveFilterItem';
import ResetFilters from './SubComponents/ResetFilters';
import useSearchContext from 'containers/SearchPage/context';

import { FormattedMessage } from 'react-intl';
import messages from '../../messages';
import { FilterContainer, FilterNavBar } from './styles';

const Filter = () => {
  const [shouldShowFilter, setShoulsShowFilter] = useState(false);
  const [shouldShowResetButton, setShouldShowResetButton] = useState(false);
  const {
    data: {
      selectedSearchTypes,
      selectedGenres,
      selectedAgeRange,
      selectedCountries,
      selectedBuiltYear,
      selectedSubtitle,
      selectedSortTypes,
    },
    action: { handleResetFilters },
  } = useSearchContext();

  /** Data */
  const activeFilters = useMemo(() => {
    const result = {
      selectedSearchTypes: [],
      selectedGenres: [],
      selectedAgeRange: [],
      selectedCountries: [],
      selectedBuiltYear: [],
      selectedSubtitle: [],
      selectedSortTypes: [],
    };

    /** selected SearchTypes */
    result.selectedSearchTypes.push({
      id: selectedSearchTypes.id,
      name: selectedSearchTypes.label,
    });

    /** selected Gnres */
    selectedGenres.map(gnr =>
      result.selectedGenres.push({ id: gnr.id, name: gnr.name }),
    );

    /** selected age range */
    selectedAgeRange.map(ageRange =>
      result.selectedAgeRange.push({
        id: ageRange.id,
        name: ageRange.name,
      }),
    );

    /** selected countries */
    selectedCountries.map(country =>
      result.selectedCountries.push({
        id: country.id,
        name: country.label,
      }),
    );

    /** selected built year */
    const [startDate, stopDate] = selectedBuiltYear;
    result.selectedBuiltYear.push({
      id: 1,
      name: `از ${startDate} تا ${stopDate}`,
    });

    /** Rank HERE */

    /** Subtitle */
    if (selectedSubtitle)
      result.selectedSubtitle.push({
        id: 1,
        name: `زیرنویس داشته باشد`,
      });
    else result.selectedSubtitle = [];

    /** selectedSortTypes */

    result.selectedSortTypes.push({
      id: selectedSortTypes.id,
      name: selectedSortTypes.label,
    });

    return result;
  }, [
    selectedSearchTypes,
    selectedGenres,
    selectedAgeRange,
    selectedCountries,
    selectedBuiltYear,
    selectedSubtitle,
    selectedSortTypes,
  ]);

  const isSingleChoise = key => {
    if (
      key === 'selectedSearchTypes' ||
      key === 'selectedBuiltYear' ||
      key === 'selectedSortTypes'
    )
      return true;
    else false;
  };

  useEffect(() => {
    if (
      activeFilters.selectedAgeRange.length == 0 &&
      activeFilters.selectedCountries.length == 0 &&
      activeFilters.selectedGenres.length == 0 &&
      activeFilters.selectedSubtitle.length == 0
    ) {
      setShouldShowResetButton(false);
    } else setShouldShowResetButton(true);
  }, [activeFilters]);

  /** handlers  */
  const handleShowFilter = useCallback(() => {
    setShoulsShowFilter(state => !state);
  }, [setShoulsShowFilter]);

  return (
    <FilterContainer>
      <FilterNavBar>
        <Button
          onClick={handleShowFilter}
          type={ButtonTypes.FULLFILL}
          keepActive={shouldShowFilter}
          label={<FormattedMessage {...messages.filter} />}
        />

        {Object.entries(activeFilters).map(([key, items]) => {
          return items.map((filterItem, i) => (
            <ActiveFilterItem
              key={i}
              category={key}
              isSingleChoise={isSingleChoise(key)}
              {...filterItem}
            />
          ));
        })}

        {shouldShowResetButton && <ResetFilters handler={handleResetFilters} />}
      </FilterNavBar>
      {shouldShowFilter && <FilterBox />}
    </FilterContainer>
  );
};

export default Filter;
