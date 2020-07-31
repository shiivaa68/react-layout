import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/SearchPage/messages';
import { ResetFilterBtn } from './styles';

const ResetFilters = ({ handler }) => {
  return (
    <ResetFilterBtn onClick={handler}>
      <FormattedMessage {...messages.reset_filter} />
    </ResetFilterBtn>
  );
};

export default ResetFilters;
