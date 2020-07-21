/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HeadingCover';

export default defineMessages({
  playFilm: {
    id: `${scope}.playFilm`,
    defaultMessage: 'ورود و پخش فیلم ',
  },
  movie_length: {
    id: `${scope}.movie_length`,
    defaultMessage: 'دقیقه ',
  },
  quality: {
    id: `${scope}.quality`,
    defaultMessage: 'کیفیت ',
  },
  double: {
    id: `${scope}.double`,
    defaultMessage: ' دوبله  ',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'زیرنویس ',
  },
  genres:{
    id: `${scope}.genres`,
    defaultMessage: 'دسته بندی ',
  },

  review: {
    id: `${scope}.review`,
    defaultMessage: 'نقد و بررسی ',
  },
  rewards:{
    id: `${scope}.rewards`,
    defaultMessage: ' جوایز و افتخارات ',
  },


});
