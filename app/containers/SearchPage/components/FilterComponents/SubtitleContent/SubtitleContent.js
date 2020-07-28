import React from 'react';
import useSearchContext from 'containers/SearchPage/context';

import { SubtitleWrapper } from './styles';

import { Checkbox } from 'components/kit';

const SearchTypeContent = () => {
  const {
    data: { selectedSubtitle },
    action: { handleSetSelectedSubtitle },
  } = useSearchContext();

  return (
    <SubtitleWrapper>
      <Checkbox
        id={1}
        label={'زیرنویس'}
        checked={selectedSubtitle}
        onChange={handleSetSelectedSubtitle}
      />
    </SubtitleWrapper>
  );
};

export default SearchTypeContent;
