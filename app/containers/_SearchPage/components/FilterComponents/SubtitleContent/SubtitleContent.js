import React from 'react';
import useSearchContext from 'containers/SearchPage/context';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

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
            label={<FormattedMessage {...messages.subtitleTpeContent} />}
            checked={selectedSubtitle}
            onChange={handleSetSelectedSubtitle}
          />
   
    </SubtitleWrapper>
  );
};

export default SearchTypeContent;

