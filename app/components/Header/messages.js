/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'خانه',
  },
  films: {
    id: `${scope}.films`,
    defaultMessage: 'فیلم ها',
  },
  series: {
    id: `${scope}.series`,
    defaultMessage: 'سریال ها',
  },
 
  categories: {
    id: `${scope}.categories`,
    defaultMessage: 'دسته بندی ها',
  },
  buyPkg: {
    id: `${scope}.buyPkg`,
    defaultMessage: 'خرید اشتراک',
  },
  login_signup: {
    id: `${scope}.login_signup`,
    defaultMessage: 'ورود/ثبت نام',
  },
});
