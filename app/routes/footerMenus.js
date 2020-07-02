import React from 'react';
import { FormattedMessage } from 'react-intl';

import message from './messages';

const FooterMenus = [
  {
    id: 1,
    label: <FormattedMessage {...message.AboutTamashakhaneh} />,
    to: '/',
  },
  { id: 2, label: <FormattedMessage {...message.Blog} />, to: '/blog' },
  { id: 3, label: <FormattedMessage {...message.Question} />, to: '/question' },
  {
    id: 4,
    label: <FormattedMessage {...message.Application} />,
    to: './application',
  },
  { id: 5, label: <FormattedMessage {...message.AboutUs} />, to: './aboutUs' },
  {
    id: 6,
    label: <FormattedMessage {...message.ContactUs} />,
    to: './contact-us',
  },
  { id: 7, label: <FormattedMessage {...message.Rules} />, to: './rules' },
  {
    id: 8,
    label: <FormattedMessage {...message.BuyPackage} />,
    to: './buy-package',
  },
  {
    id: 9,
    label: <FormattedMessage {...message.SituationUseInternet} />,
    to: './situation-use-internet',
  },
];

export default FooterMenus;
