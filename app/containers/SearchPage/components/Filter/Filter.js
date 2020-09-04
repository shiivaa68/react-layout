import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Button } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import FilterBox from './SubComponents/FilterBox';
import ActiveFilterItem from './SubComponents/ActiveFilterItem';
import ResetFilters from './SubComponents/ResetFilters';
import useSearchContext from 'containers/SearchPage/context';
import DOWNARROW from 'images/downArrow.svg';
import SortTypeContent from '../FilterComponents/SortTypeContent'

import { FormattedMessage } from 'react-intl';
import messages from '../../messages';
import { FilterContainer, FilterNavBar, Down_Arrow } from './styles';

const Filter = ({ isMobile }) => {
  const [shouldShowFilter, setShoulsShowFilter] = useState(false);
  const [shouldShowResetButton, setShouldShowResetButton] = useState(false);
  const {
    data: {
      selectedSearchTypes,
      selectedGenres,
      selectedAgeRange,
      selectedCountries,
      selectedBuiltYear,
      selectedRankNumber,
      selectedSubtitleTypes,
      selectedVoiceTypes,
      selectedDubbing,
      // selectedSortTypes,
    },
    action: { handleResetFilters},
  } = useSearchContext();

  /** Data */
  const activeFilters = useMemo(() => {
    const result = {
      selectedSearchTypes: [],
      selectedGenres: [],
      selectedAgeRange: [],
      selectedCountries: [],
      selectedBuiltYear: [],
      selectedRankNumber: [],
      selectedDubbing: [],
      selectedSubtitleTypes:[],
      selectedVoiceTypes:[],
      // selectedSortTypes: [],
    };


    /** selected SearchTypes */
    // result.selectedSearchTypes.push({
    //   id: selectedSearchTypes.id,
    //   name: selectedSearchTypes.label,
    // });

    Object.entries(selectedSearchTypes).length > 0 &&
    result.selectedSearchTypes.push({
    id: selectedSearchTypes.id,
    name: selectedSearchTypes.label,
  });



    /** selected Gnres */
    selectedGenres.map(gnr =>
      result.selectedGenres.push({ id: gnr.id, name: gnr.name }),
    );


    Object.entries(selectedAgeRange).length > 0 &&
      result.selectedAgeRange.push({
      id: selectedAgeRange.id,
      name: selectedAgeRange.name,
    });
    /** selected countries */

    Object.entries(selectedCountries).length > 0 &&
      result.selectedCountries.push({
      id: selectedCountries.id,
      name: selectedCountries.label,
    });



    /** selected built year */
    // const [startDate, stopDate] = selectedBuiltYear;
    // result.selectedBuiltYear.push({
    //   id: 1,
    //   name: `از ${startDate} تا ${stopDate}`,
    // });

    const [startDate, stopDate] = selectedBuiltYear;
    Object.entries(selectedBuiltYear).length > 0 &&
    result.selectedBuiltYear.push({
    id: selectedBuiltYear.id,
    name:  `از ${startDate} تا ${stopDate}`,
  });



    /**selected rank number */
    // const [minrank, maxrank] = selectedRankNumber;
    // result.selectedRankNumber.push({
    //   id: 1,
    //   name: `از ${minrank} تا ${maxrank}`,
    // });

    const [minrank, maxrank] = selectedRankNumber;
    Object.entries(selectedRankNumber).length > 0 &&
    result.selectedRankNumber.push({
    id: selectedRankNumber.id,
    name:`از ${minrank} تا ${maxrank}`,
  });



  /** selected Gnres */
  selectedVoiceTypes.map(voiceType =>
    result.selectedVoiceTypes.push({ id: voiceType.id, name: voiceType.label }),
  );


  selectedSubtitleTypes.map(subType =>
    result.selectedSubtitleTypes.push({ id: subType.id, name: subType.label }),
  );

    /** Subtitle */
    if (selectedDubbing)
      result.selectedDubbing.push({
        id: 1,
        name: `دوبله  `,
      });
    else result.selectedDubbing = [];

    /** selectedSortTypes */

    // result.selectedSortTypes.push({
    //   id: selectedSortTypes.id,
    //   name: selectedSortTypes.label,
    // });

  //   Object.entries(selectedSortTypes).length > 0 &&
  //   result.selectedSortTypes.push({
  //   id: selectedSortTypes.id,
  //   name: selectedSortTypes.label,
  // });

    return result;
  }, [
    selectedSearchTypes,
    selectedGenres,
    selectedAgeRange,
    selectedCountries,
    selectedBuiltYear,
    selectedRankNumber,
    selectedSubtitleTypes,
    selectedVoiceTypes,
    selectedDubbing,
    // selectedSortTypes,
  ]);

  // const isSingleChoise = key => {
  //   if (
  //     key === 'selectedSearchTypes' ||
  //     key === 'selectedBuiltYear' ||
  //     key === 'selectedSortTypes' ||
  //     key === 'selectedRankNumber'
  //   )
  //     return true;
  //   else false;
  // };

  useEffect(() => {
    if (
      activeFilters.selectedAgeRange.length == 0 &&
      activeFilters.selectedCountries.length == 0 &&
      activeFilters.selectedGenres.length == 0 &&
      activeFilters.selectedBuiltYear.length ==0 &&
      activeFilters.selectedRankNumber.length==0&&
      activeFilters.selectedSearchTypes.length==0 &&
      activeFilters.selectedSubtitleTypes.length ==0 &&
      activeFilters.selectedVoiceTypes.length==0&&
      activeFilters.selectedDubbing.length==0 
      // activeFilters.selectedSortTypes.length==0
    ) {
      setShouldShowResetButton(false);
    } else setShouldShowResetButton(true);
  }, [activeFilters]);
// console.log(activeFilters)
  /** handlers  */
  const handleShowFilter = useCallback(() => {
    setShoulsShowFilter(state => !state);
  }, [setShoulsShowFilter]);
  // console.log({activeFilters},'filterItem');
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
              // isSingleChoise={isSingleChoise(key)}
              {...filterItem}
            />
          ));
        })}

        {shouldShowResetButton && <ResetFilters handler={handleResetFilters} />}
        {isMobile && <SortTypeContent />}
      </FilterNavBar>
        { !isMobile && <SortTypeContent />}

      {shouldShowFilter && <FilterBox />}
    
    </FilterContainer>
  );
};

export default Filter;
