import React from 'react';

import { HeaderLink, HeaderBlankLink } from './style';

const MenuItem = ({ to, label, type, ...rest }) =>
  type === 'BLANK_URL' ? (
    <HeaderBlankLink target={rest.target} href={to}>
      {label}
    </HeaderBlankLink>
  ) : (
    <HeaderLink to={to} {...rest}>
      {label}
    </HeaderLink>
  );

export default MenuItem;
