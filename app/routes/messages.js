/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Menus';

export default defineMessages({
  /** HEADER MENUS  */
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

  /** FOOTER MENUS */
  AboutTamashakhaneh: {
    id: `${scope}.messageAboutTamashakhaneh`,
    defaultMessage: 'درباره تماشاخونه',
  },
  Blog: {
    id: `${scope}.Blog`,
    defaultMessage: 'وبلاگ',
  },
  Question: {
    id: `${scope}.Question`,
    defaultMessage: 'سوالات',
  },
  Application: {
    id: `${scope}.Application`,
    defaultMessage: 'اپلیکیشن ها',
  },
  AboutUs: {
    id: `${scope}.AboutUs`,
    defaultMessage: 'درباره ما',
  },
  ContactUs: {
    id: `${scope}.ContactUs`,
    defaultMessage: 'تماس با ما',
  },
  Rules: {
    id: `${scope}.Rules`,
    defaultMessage: 'قوانین',
  },
  BuyPackage: {
    id: `${scope}.BuyPackage`,
    defaultMessage: 'خرید اشتراک',
  },
  SituationUseInternet: {
    id: `${scope}.SituationUseInternet`,
    defaultMessage: 'شرایط مصرف اینترنت',
  },
});
