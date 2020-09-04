import React from 'react';
import useSearchContext from 'containers/SearchPage/context';

import { SortTypeWrapper } from './styles';
import Select from 'components/kit/Select';

const SortTypeContent = () => {
  const {
    data: { sortTypes, selectedSortTypes },
    action: { handleSetSelectedSortTypes },
  } = useSearchContext();

  return (
    <SortTypeWrapper>
      {/* {sortTypes.map(sType => {
        return (
          <Checkbox
            {...sType}
            key={sType.id}
            id={sType.id}
            label={sType.label}
            checked={selectedSortTypes.id === sType.id}
            onChange={handleSetSelectedSortTypes}
          />
        );
      })} */}
    <Select placeholder='مرتب سازی' items={sortTypes} selectedId={selectedSortTypes.id} handleSelect={handleSetSelectedSortTypes}/>
    </SortTypeWrapper>
  );
};

export default SortTypeContent;