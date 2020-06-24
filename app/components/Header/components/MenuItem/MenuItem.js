import React from 'react';
import { FormattedMessage } from 'react-intl';

import { HeaderLink } from '../../styledComponents';
import messages from '../../messages';

const MenuItem = ({ to, messageId }) => {
  return (
    <HeaderLink to={to}>
      <FormattedMessage {...messages[messageId]} />
    </HeaderLink>
  );
};

export default MenuItem;
