import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const HeaderMenus = [
  { id: 1, label: <FormattedMessage {...messages.home} />, to: '/' },
  { id: 2, label: <FormattedMessage {...messages.films} />, to: '/films' },
  {
    id: 3,
    label: <FormattedMessage {...messages.series} />,
    to: '/series',
  },
  {
    id: 4,
    label: <FormattedMessage {...messages.categories} />,
    to: '/categories',
  },
  { id: 5, label: <FormattedMessage {...messages.soon} />, to: '/soon' },
  { id: 6, label: <FormattedMessage {...messages.kids} />, to: '/kids' },
];

export default HeaderMenus;
