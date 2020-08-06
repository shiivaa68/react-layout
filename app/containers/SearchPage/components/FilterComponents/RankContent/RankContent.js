import React from 'react';
import { Range } from 'rc-slider';

import { FormattedMessage } from 'react-intl';
import messages from 'containers/SearchPage/messages';

import RangeSelectorToolTip from '../RangeSelectorTooltip';
import useSearchContext from 'containers/SearchPage/context';

import RANK_NUMBER from 'constants/RankNumber';

import 'rc-slider/assets/index.css';
import { RankWrapper, RangeDetails } from './styles';

const RankContent = () => {
  const { MIN_RANK, MAX_RANK } = RANK_NUMBER;

  const {
    data: {},
    action: { handleSelectedRankNumber },
  } = useSearchContext();

  return (
    <RankWrapper>
      <Range
        min={MIN_RANK}
        max={MAX_RANK}
        defaultValue={[MIN_RANK, MAX_RANK]}
        onAfterChange={handleSelectedRankNumber}
        handle={RangeSelectorToolTip}
      />

      <RangeDetails>
        <FormattedMessage
          {...messages.MinRank}
          values={{ rankNumber: MIN_RANK }}
        />
        <FormattedMessage {...messages.MaxRank} values={{ rankNumber: MAX_RANK }} />
      </RangeDetails>
    </RankWrapper>
  );
};

export default RankContent;