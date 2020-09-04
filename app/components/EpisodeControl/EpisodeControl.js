import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl'
import Button from '../kit/Button';

import messages from './messages';

import { ButtonWrapper,ButtonControl } from './styles';
import Select from '../kit/Select';

const EpisodeControl = ( {seasons = [],
  handleSetActiveSeason,
  activeSeasonId}) =>
 {
 

  return (
    <ButtonWrapper>
    <ButtonControl>
      <Select placeholder='انتخاب فصل' items={seasons} selectedId={activeSeasonId} handleSelect={handleSetActiveSeason}/>
    </ButtonControl>
     </ButtonWrapper>
  );
};

export default EpisodeControl;

