import React, { useState, useMemo, useCallback, useEffect } from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import globalConfigs from 'utils/globalConfigs';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useBindDispatch } from 'utils/redux/useBindDispatch';

import SEARCH_TYPES from 'constants/SearchTypes';
import SORT_TYPES from 'constants/SortTypes';
import BUILT_YEAR_FILTER from 'constants/BuiltYearFilter';

import {
  getMovieSearchPageAction,
  resetMovieSearchPageAction,
  getSeriesSearchPageAction,
  resetSerieSearchPageAction,
  getCastsSearchPageAction,
  resetCastsSearchPageAction,
} from './redux/actions';

import SearchPageReducer from './redux/reducer';
import SearchPageSaga from './redux/saga';
import InitialState from './redux/initialState';

import {
  SearchTypeContent,
  GenresContent,
  ContryContent,
  AgeRangeContent,
  SubtitleContent,
  SortTypeContent,
  BuiltYearContet,
} from './components/FilterComponents';

import messages from './messages';

const SearchPageKeyOnRedux = 'SearchPage';

const SearchManager = ({ history }) => {
  /** Constsnts */
  const { START_DATE, STOP_DATE } = BUILT_YEAR_FILTER;

  /** Injectors */

  useInjectReducer({ key: SearchPageKeyOnRedux, reducer: SearchPageReducer });
  useInjectSaga({ key: SearchPageKeyOnRedux, saga: SearchPageSaga });

  /** States */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSearchTypes, setSelectedSearchTypes] = useState({
    id: 1,
    name: SEARCH_TYPES.ALL,
    label: 'همه',
  });
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedBuiltYear, setSelectedBuiltYear] = useState([
    START_DATE,
    STOP_DATE,
  ]);
  const [selectedAgeRange, setSelectedAgeRange] = useState([]);
  const [selectedSubtitle, setSelectedSubtitle] = useState(false);
  const [selectedSortTypes, setSelectedSortTypes] = useState({
    id: 1,
    sortOrder: 'ASC',
    sortType: 'imdb_rank',
    label: 'امتیاز IMDB (صعودی)',
    name: SORT_TYPES.IMDB_RANK_ASC,
  });

  // bounded redux actions
  const [
    getMovieSearchPage,
    resetMovieSearchPage,
    getSeriesSearchPage,
    resetSerieSearchPage,
    getCastsSearchPage,
    resetCastsSearchPage,
  ] = useBindDispatch([
    getMovieSearchPageAction,
    resetMovieSearchPageAction,
    getSeriesSearchPageAction,
    resetSerieSearchPageAction,
    getCastsSearchPageAction,
    resetCastsSearchPageAction,
  ]);

  /** Redux Data */
  const { genres, country, agerange } = useSelector(state => state.global);
  const { movies_data, series_data, casts_data } = useSelector(
    state => state.SearchPage || InitialState,
  );

  /** Effects */
  useEffect(() => {
    const gnrIDs = selectedGenres.map(gnr => gnr.id);
    const searchTypes = selectedSearchTypes.name;
    const countryCodes = selectedCountries.map(country => country.country_code);
    const ageRangeIDs = selectedAgeRange.map(agerange => agerange.id);

    /** TWO ACTIONS HERE
     *  - keep update url
     *  - call api endpoints
     */
    handleUrlParams({
      searchQuery,
      searchTypes,
      gnrIDs,
      countryCodes,
      selectedBuiltYear,
      ageRangeIDs,
      selectedSubtitle,
      selectedSortTypes,
    });
    handleApiSide({
      searchQuery,
      searchTypes,
      gnrIDs,
      countryCodes,
      selectedBuiltYear,
      ageRangeIDs,
      selectedSubtitle,
      selectedSortTypes,
    });
  }, [
    searchQuery,
    selectedSearchTypes,
    selectedGenres,
    selectedCountries,
    selectedBuiltYear,
    selectedAgeRange,
    selectedSortTypes,
    selectedSubtitle,
  ]);

  /** DECODING PART */
  // useEffect(() => {
  //   console.log({ location });
  //   console.log('___QUERY___', qs.parse(decodeURI(location.search.slice(1))));
  // }, [location]);

  /** Data handlers */
  const sidebarMenuData = useMemo(() => {
    return [
      {
        menuId: 1,
        name: <FormattedMessage {...messages.filterTypes} />,
        component: SearchTypeContent,
      },
      {
        menuId: 2,
        name: <FormattedMessage {...messages.filterGenres} />,
        component: GenresContent,
      },
      {
        menuId: 3,
        name: <FormattedMessage {...messages.filterAge} />,
        component: AgeRangeContent,
      },
      {
        menuId: 4,
        name: <FormattedMessage {...messages.filterCountry} />,
        component: ContryContent,
      },
      {
        menuId: 5,
        name: <FormattedMessage {...messages.filterBuiltYear} />,
        component: BuiltYearContet,
      },
      {
        menuId: 6,
        name: <FormattedMessage {...messages.filterRank} />,
        component: () => <>RANK_YEAR</>,
      },
      {
        menuId: 7,
        name: <FormattedMessage {...messages.filterSubtitle} />,
        component: SubtitleContent,
      },
      {
        menuId: 8,
        name: <FormattedMessage {...messages.filterSort} />,
        component: SortTypeContent,
      },
    ];
  }, []);

  const searchTypes = useMemo(() => {
    return [
      { id: 1, name: SEARCH_TYPES.ALL, label: 'همه' },
      { id: 2, name: SEARCH_TYPES.MOVIES, label: 'فیلم ها' },
      { id: 3, name: SEARCH_TYPES.SERIES, label: 'سریال ها' },
      { id: 4, name: SEARCH_TYPES.CASTS, label: 'عوامل' },
    ];
  }, []);

  const sortTypes = useMemo(
    () => [
      {
        id: 1,
        sortType: 'imdb_rank',
        sortOrder: 'ASC',
        name: SORT_TYPES.IMDB_RANK_ASC,
        label: 'امتیاز IMDB (صعودی)',
      },
      {
        id: 2,
        sortType: 'imdb_rank',
        sortOrder: 'DESC',
        name: SORT_TYPES.IMDB_RANK_DESC,
        label: 'امتیاز IMDB (نزولی)',
      },
      {
        id: 3,
        sortType: 'created_date',
        sortOrder: 'ASC',
        name: SORT_TYPES.CREATED_DATA_ASC,
        label: 'سال ساخت (جدیدترین)',
      },
      {
        id: 4,
        sortType: 'created_date',
        sortOrder: 'DESC',
        name: SORT_TYPES.CREATED_DATA_DESC,
        label: 'سال ساخت (قدیمی ترین)',
      },
      {
        id: 5,
        sortType: 'visit_count',
        sortOrder: 'ASC',
        nname: SORT_TYPES.VISITED_COUNT_ASC,
        label: 'یازدید(صعودی)',
      },
      {
        id: 6,
        sortType: 'visit_count',
        sortOrder: 'DESC',
        name: SORT_TYPES.VISITED_COUNT_DESC,
        label: 'بازدید (نزولی)',
      },
    ],
    [],
  );

  /** Logic handlers */
  const handleSetSearchQuery = useCallback(
    e => {
      const { value } = e.target;
      setSearchQuery(value);
    },
    [searchQuery, setSearchQuery],
  );

  const handleSetSelectedSearchTypes = useCallback(
    ({ id, name, label }) => {
      setSelectedSearchTypes({
        id,
        name,
        label,
      });
    },
    [selectedSearchTypes, setSelectedSearchTypes],
  );

  const handleSetSelectedGenres = useCallback(
    ({ id, name }) => {
      const newGnrArray = handleUpdateArray(selectedGenres, { id, name });
      setSelectedGenres(newGnrArray);
    },
    [selectedGenres, setSelectedGenres],
  );

  const handleSetSelectedContries = useCallback(
    ({ id, label, country_code }) => {
      const newCountryArray = handleUpdateArray(selectedCountries, {
        id,
        label,
        country_code,
      });
      setSelectedCountries(newCountryArray);
    },
    [selectedCountries, setSelectedCountries],
  );

  const handleSetSelectedAgeRange = useCallback(
    ({ id, name }) => {
      const newAgeRangeArray = handleUpdateArray(selectedAgeRange, {
        id,
        name,
      });
      setSelectedAgeRange(newAgeRangeArray);
    },
    [selectedAgeRange, setSelectedAgeRange],
  );

  const handleSetSelectedSortTypes = useCallback(
    ({ id, sortType, sortOrder, name, label }) => {
      setSelectedSortTypes({
        id,
        sortType,
        sortOrder,
        name,
        label,
      });
    },
    [selectedSortTypes, setSelectedSortTypes],
  );

  const handleSetSelectedSubtitle = useCallback(
    e => {
      setSelectedSubtitle(state => !state);
    },
    [selectedSubtitle, setSelectedSubtitle],
  );

  const handleSelectedBuiltYear = useCallback(
    builtRange => {
      setSelectedBuiltYear(builtRange);
    },
    [selectedBuiltYear, setSelectedBuiltYear],
  );

  const handleGeneralResetFilter = useCallback(
    ({ category, id, ...rest }) => {
      switch (true) {
        case category === 'selectedSearchTypes': {
          setSelectedSearchTypes({
            id: 1,
            name: SEARCH_TYPES.ALL,
            label: 'همه',
          });
          break;
        }

        case category === 'selectedGenres': {
          const newGenresArray = handleUpdateArray(selectedGenres, {
            id,
            name,
          });
          setSelectedGenres(newGenresArray);
          break;
        }

        case category === 'selectedAgeRange': {
          const newAgeRange = handleUpdateArray(selectedAgeRange, {
            id,
            name,
          });
          setSelectedAgeRange(newAgeRange);
          break;
        }

        case category === 'selectedCountries': {
          const newSelecrtedContries = handleUpdateArray(selectedCountries, {
            id,
            name,
          });
          setSelectedCountries(newSelecrtedContries);
          break;
        }

        case category === 'selectedBuiltYear': {
          setSelectedBuiltYear([START_DATE, STOP_DATE]);
          break;
        }

        case category === 'selectedSubtitle': {
          setSelectedSubtitle(false);
          break;
        }

        case category === 'selectedSortTypes': {
          setSelectedSortTypes({
            id: 1,
            sortOrder: 'ASC',
            sortType: 'imdb_rank',
            label: 'امتیاز IMDB (صعودی)',
            name: SORT_TYPES.IMDB_RANK_ASC,
          });
          break;
        }

        default:
          break;
      }
    },
    [selectedGenres, selectedAgeRange, selectedCountries],
  );

  const handleResetFilters = useCallback(() => {
    console.log('RESET_ALL_FILTERS');
    /** RESET FILTERS PART */
    setSelectedSearchTypes({
      id: 1,
      name: SEARCH_TYPES.ALL,
      label: 'همه',
    });
    setSelectedGenres([]);
    setSelectedCountries([]);
    setSelectedBuiltYear([START_DATE, STOP_DATE]);
    setSelectedAgeRange([]);
    setSelectedSubtitle(false);
    setSelectedSortTypes({
      id: 1,
      sortOrder: 'ASC',
      sortType: 'imdb_rank',
      label: 'امتیاز IMDB (صعودی)',
      name: SORT_TYPES.IMDB_RANK_ASC,
    });
  }, []);

  /** Utils */
  const handleUpdateArray = (array, target) => {
    let result = [];

    const foundIndex = array.findIndex(item => item.id === target.id);

    if (foundIndex === -1) {
      result = [...array, target];
    } else {
      result = [
        ...array.slice(0, foundIndex),
        ...array.slice(foundIndex + 1, array.length),
      ];
    }

    return result;
  };

  const handleUrlParams = ({
    searchQuery,
    searchTypes,
    gnrIDs,
    countryCodes,
    selectedBuiltYear,
    ageRangeIDs,
    selectedSortTypes,
    selectedSubtitle,
  }) => {
    const queries = new URLSearchParams();

    /** search Query */
    queries.append('query', searchQuery);

    /** search Types */
    queries.append('search_types', searchTypes);

    /** gneres */
    gnrIDs.length > 0 && queries.append('genres', gnrIDs.join(','));

    /** ageRange */
    ageRangeIDs.length > 0 &&
      queries.append('age_range', ageRangeIDs.join(','));

    /** contrycodes */
    countryCodes.length > 0 &&
      queries.append('countries', countryCodes.join(','));

    /** builtYear */
    const [startDate, stopDate] = selectedBuiltYear;
    queries.append('min_year', startDate);
    queries.append('max_year', stopDate);

    /** itemsorts */
    queries.append('item_sort', selectedSortTypes.sortType);
    queries.append('sort_type', selectedSortTypes.sortOrder);

    /** Subtitle */
    queries.append('voice', Number(selectedSubtitle));

    history.push(`/search?${queries.toString()}`);
  };

  const handleApiSide = ({
    searchQuery,
    searchTypes,
    gnrIDs,
    countryCodes,
    selectedBuiltYear,
    ageRangeIDs,
    selectedSubtitle,
    selectedSortTypes,
  }) => {
    // TODO:
    //  - call related api
    const [startDate, stopDate] = selectedBuiltYear;

    const searchConfig = {
      page: 1,
      limit: globalConfigs.pageLimit,
      text: searchQuery,
      genres: gnrIDs.join(','),
      age_range: ageRangeIDs.join(','),
      country: countryCodes.map(el => el.toLowerCase()).join(','),
      item_sort: selectedSortTypes.sortType,
      sort_type: selectedSortTypes.sortOrder,
      voice: Number(selectedSubtitle),
      min_year: startDate,
      max_year: stopDate,
    };

    switch (searchTypes) {
      case SEARCH_TYPES.ALL: {
        console.log('should call ALL APIS');
        getMovieSearchPage({ searchConfig });
        getSeriesSearchPage({ searchConfig });
        getCastsSearchPage({ searchConfig });
        break;
      }
      case SEARCH_TYPES.MOVIES: {
        console.log('should call ALL MOVIES');
        getMovieSearchPage({ searchConfig });
        resetSerieSearchPage();
        resetCastsSearchPage();
        break;
      }
      case SEARCH_TYPES.SERIES: {
        console.log('should call ALL SERIES');
        getSeriesSearchPage({ searchConfig });
        resetMovieSearchPage();
        resetCastsSearchPage();
        break;
      }
      case SEARCH_TYPES.CASTS: {
        console.log('should call ALL CASTS');
        getCastsSearchPage({ searchConfig });
        resetMovieSearchPage();
        resetSerieSearchPage();
        // reset > movie , serie
        break;
      }

      default:
        console.log('do nothing...');
        break;
    }
  };

  return {
    data: {
      // base data
      sidebarMenuData,
      searchTypes,
      genres,
      country,
      agerange,
      sortTypes,

      // selected filter data
      selectedSearchTypes,
      selectedGenres,
      selectedAgeRange,
      selectedCountries,
      selectedBuiltYear,
      selectedSubtitle,
      selectedSortTypes,

      // result data
      movies_data,
      series_data,
      casts_data,
    },
    action: {
      handleSetSearchQuery,
      handleSetSelectedSearchTypes,
      handleSetSelectedGenres,
      handleSetSelectedContries,
      handleSelectedBuiltYear,
      handleSetSelectedAgeRange,
      handleSetSelectedSubtitle,
      handleSetSelectedSortTypes,
      handleGeneralResetFilter,
      handleResetFilters,
    },
  };
};

export default SearchManager;
