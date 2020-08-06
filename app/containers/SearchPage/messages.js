import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Search';

export default defineMessages({
  searchPlaceHolder: {
    id: `${scope}.searchPlaceHolder`,
    defaultMessage: 'فیلم سریال عوامل',
  },
  clearSearch: {
    id: `${scope}.clearSearch`,
    defaultMessage: 'پاک کردن',
  },
  filter: {
    id: `${scope}.filter`,
    defaultMessage: 'فیلتر',
  },
  filterTypes: {
    id: `${scope}.filterTypes`,
    defaultMessage: 'نوع',
  },
  filterGenres: {
    id: `${scope}.filterGenres`,
    defaultMessage: '‌‌ژانر',
  },
  filterAge: {
    id: `${scope}.filterAge`,
    defaultMessage: 'رده سنی',
  },
  filterCountry: {
    id: `${scope}.filterCountry`,
    defaultMessage: 'کشور سازنده',
  },
  filterBuiltYear: {
    id: `${scope}.filterBuiltYear`,
    defaultMessage:'سال انتشار ',
  },
  filterRank: {
    id: `${scope}.filterRank`,
    defaultMessage:'رنک ',
  },
  filterSubtitle: {
    id: `${scope}.filterSubtitle`,
    defaultMessage: 'زیر نویس',
  },
 
  filterSort: {
    id: `${scope}.filterSort`,
    defaultMessage: 'مرتب سازی',
  },

  StartRank: {
    id: `${scope}.StartRank`,
    defaultMessage: 'از سال {year}',
  },
  StopRank: {
    id: `${scope}.StopRank`,
    defaultMessage: 'تا {year}',
  },

  MinRank: {
    id: `${scope}.MinRank`,
    defaultMessage: 'از رنک {rankNumber}',
  },
  MaxRank: {
    id: `${scope}.MaxRank`,
    defaultMessage: 'تا رنک {rankNumber}',
  },
  reset_filter: {
    id: `${scope}.reset_filter`,
    defaultMessage: 'پاک کردن فیلتر ها',
  },


});