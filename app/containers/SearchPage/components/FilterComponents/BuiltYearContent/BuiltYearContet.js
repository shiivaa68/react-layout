import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Range } from 'rc-slider';
import messages from 'containers/SearchPage/messages';
import RangeSelectorToolTip from '../RangeSelectorTooltip';
import useSearchContext from 'containers/SearchPage/context';

import BUILT_YEAR_FILTER from 'constants/BuiltYearFilter';

import 'rc-slider/assets/index.css';
import { RankWrapper, RangeDetails } from './styles';

const BuiltYearContet = () => {
  const { START_DATE, STOP_DATE } = BUILT_YEAR_FILTER;

  const {
    data: {},
    action: { handleSelectedBuiltYear },
  } = useSearchContext();

  return (
    <RankWrapper>
      <Range
        min={START_DATE}
        max={STOP_DATE}
        defaultValue={[START_DATE, STOP_DATE]}
        onAfterChange={handleSelectedBuiltYear}
        handle={RangeSelectorToolTip}
      />

      <RangeDetails>
        <FormattedMessage
          {...messages.StartRank}
          values={{ year: START_DATE }}
        />
        <FormattedMessage {...messages.StopRank} values={{ year: STOP_DATE }} />
      </RangeDetails>
    </RankWrapper>
  );
};

export default BuiltYearContet;
