/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  aboutTamashakhoneh: {
    id: `${scope}.aboutTamashakhoneh`,
    defaultMessage: 'درباره تماشاخونه',
  },
  blog: {
    id: `${scope}.blog`,
    defaultMessage: ' بلاگ',
  },
  question: {
    id: `${scope}.question`,
    defaultMessage: ' سوالات متدوال',
  },
 
  application: {
    id: `${scope}.application`,
    defaultMessage: 'اپیلیکشن ها',
  },
  aboutUs: {
    id: `${scope}.aboutUs`,
    defaultMessage: ' درباره ما',
  },
  rules: {
    id: `${scope}.rules`,
    defaultMessage: 'قوانین',
  },
  buy: {
    id: `${scope}.buy`,
    defaultMessage: 'خرید اشتراک',
  },
  situasionUseInternet: {
    id: `${scope}.situasionUseInternet`,
    defaultMessage: 'تعرفه مصرف اینترنت  ',
  },
  
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },



});
