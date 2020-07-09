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
  download: {
    id: `${scope}.download`,
    defaultMessage: 'دانلود',
  },
});
