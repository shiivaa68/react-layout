import React from 'react';
import { FormattedMessage } from 'react-intl';

import { FooterLink } from '../../styledComponents';
import messages from '../../messages';

const FooterItem = ({ to, messageId }) => {
  return (
    <FooterLink to={to}>
      <FormattedMessage {...messages[messageId]} />
    </FooterLink>
  );
};

export default FooterItem;