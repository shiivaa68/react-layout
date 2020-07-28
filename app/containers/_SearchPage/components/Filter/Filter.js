import React, { useState, useCallback } from 'react';
import { Button } from 'components/kit';
import { ButtonTypes } from 'components/kit/Button/constants';
import { FilterContainer } from './styles';
import FilterBox from './SubComponents/FilterBox';

import { FormattedMessage } from 'react-intl';
import messages from '../../messages';

const Filter = () => {
  const [shouldShowFilter, setShoulsShowFilter] = useState(true);

  const handleShowFilter = useCallback(() => {
    setShoulsShowFilter(state => !state);
  }, [setShoulsShowFilter]);

  return (
    <FilterContainer>
      <Button
        onClick={handleShowFilter}
        type={ButtonTypes.FULLFILL}
        keepActive={shouldShowFilter}
        label={<FormattedMessage {...messages.filter} />}
      />
      {shouldShowFilter && <FilterBox />}
    </FilterContainer>
  );
};

export default Filter;
