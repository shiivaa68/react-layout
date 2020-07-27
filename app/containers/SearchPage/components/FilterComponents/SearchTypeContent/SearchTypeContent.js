import React from 'react';
import useSearchContext from 'containers/SearchPage/context';

import { SearchTypeWrapper } from './styles';

import { Checkbox } from 'components/kit';

const SearchTypeContent = () => {
  const {
    data: { searchTypes, selectedSearchTypes },
    action: { handleSetSelectedSearchTypes },
  } = useSearchContext();

  return (
    <SearchTypeWrapper>
      {searchTypes.map(sType => {
        return (
          <Checkbox
            {...sType}
            key={sType.id}
            id={sType.id}
            label={sType.label}
            checked={selectedSearchTypes.id === sType.id}
            onChange={handleSetSelectedSearchTypes}
          />
        );
      })}
    </SearchTypeWrapper>
  );
};

export default SearchTypeContent;
