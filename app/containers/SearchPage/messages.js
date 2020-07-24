import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Search';

export default defineMessages({
  searchPlaceHolder: {
    id: `${scope}.searchPlaceHolder`,
    defaultMessage: 'فیلم سریال بازیگر و ژانر',
  },
  clearSearch: {
    id: `${scope}.clearSearch`,
    defaultMessage: 'پاک کردن',
  },
  filter: {
    id: `${scope}.filter`,
    defaultMessage: 'فیلتر',
  },
  filterGenres: {
    id: `${scope}.filterGenres`,
    defaultMessage: '‌‌ژانر',
  },
  filterCountry: {
    id: `${scope}.filterCountry`,
    defaultMessage: 'کشور سازنده',
  },
  filterSubtitle: {
    id: `${scope}.filterSubtitle`,
    defaultMessage: 'زیر نویس',
  },
  filterBuiltYear: {
    id: `${scope}.filterBuiltYear`,
    defaultMessage: 'سال ساخت',
  },
  filterSort: {
    id: `${scope}.filterSort`,
    defaultMessage: 'مرتب سازی',
  },
});
