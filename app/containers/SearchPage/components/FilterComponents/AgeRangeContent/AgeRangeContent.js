import React from 'react';
import useSearchContext from 'containers/SearchPage/context';

import { AgeRangeWrapper } from './styles';

import { Checkbox } from 'components/kit';

const AgeRangeContent = () => {
  const {
    data: { agerange, selectedAgeRange },
    action: { handleSetSelectedAgeRange },
  } = useSearchContext();

  return (
    <AgeRangeWrapper>
      {agerange.map(age => {
        return (
          <Checkbox
            {...age}
            key={age.id}
            id={age.id}
            label={age.name}
            checked={age.id === selectedAgeRange.id}
            onChange={handleSetSelectedAgeRange}
          />
        );
      })}
    </AgeRangeWrapper>
  );
};

export default AgeRangeContent;
