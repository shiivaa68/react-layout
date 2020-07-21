import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl'
import Button from '../kit/Button';

import messages from './messages';

import { ButtonWrapper,ButtonControl } from './styles';

const EpisodeControl = ( {seasons = [],
  handleSetActiveSeason,
  activeSeasonId}) =>
 {
 

  return (
    <ButtonWrapper>
    <ButtonControl>
    {seasons.length > 0 &&
          seasons.map(season => (
            <Button
              key={season.title}
              type="fullfill"
              keepActive={activeSeasonId === season.id}
              label={season.title}
              onClick={() => handleSetActiveSeason(season.id)}
            />
          ))}
          
    </ButtonControl>
   
     </ButtonWrapper>
  );
};

export default EpisodeControl;

