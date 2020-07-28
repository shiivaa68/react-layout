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
} from './components/FilterComponents';

import messages from './messages';

const SearchPageKeyOnRedux = 'SearchPage';

const SearchManager = ({ history, location }) => {
  // injectors
  useInjectReducer({ key: SearchPageKeyOnRedux, reducer: SearchPageReducer });
  useInjectSaga({ key: SearchPageKeyOnRedux, saga: SearchPageSaga });

  /** States */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSearchTypes, setSelectedSearchTypes] = useState({
    id: 1,
    name: SEARCH_TYPES.ALL,
  });
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState([]);
  const [selectedSortTypes, setSelectedSortTypes] = useState({
    id: 1,
    name: SORT_TYPES.CREATED_DATA_DESC,
  });
  const [selectedSubtitle, setSelectedSubtitle] = useState(false);

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
    const sortTypes = selectedSortTypes.id;

    // console.log({ searchQuery, gnrIDs, countryCodes, ageRangeIDs });

    /** TWO ACTIONS HERE
     *  - keep update url
     *  - call api endpoints
     */
    handleUrlParams({
      searchQuery,
      searchTypes,
      gnrIDs,
      countryCodes,
      ageRangeIDs,
      sortTypes,
      selectedSubtitle,
    });
    handleApiSide({
      searchQuery,
      searchTypes,
      gnrIDs,
      countryCodes,
      ageRangeIDs,
      sortTypes,
      selectedSubtitle,
    });
  }, [
    searchQuery,
    selectedSearchTypes,
    selectedGenres,
    selectedCountries,
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
        component: () => <>BUILT_YEAR</>,
      },
      {
        menuId: 6,
        name: <FormattedMessage {...messages.filterRank} />,
        component: () => <>rank</>,
      },
      {
        menuId: 7,
        name: <FormattedMessage {...messages.filterSubtitle} />,
        component: SubtitleContent,
      },
      {
        menuId: 8,
        name: <FormattedMessage {...messages.filterSort} />,
        component: () => <>SORT_COMP</>,
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

  const sortTypes = useMemo(() => {
    return [
      { id: 1, name: SEARCH_TYPES.ALL, label: 'همه' },
      { id: 2, name: SEARCH_TYPES.MOVIES, label: 'فیلم ها' },
      { id: 3, name: SEARCH_TYPES.SERIES, label: 'سریال ها' },
      { id: 4, name: SEARCH_TYPES.CASTS, label: 'عوامل' },
    ];
  }, []);

  /** Logic handlers */
  const handleSetSearchQuery = useCallback(
    e => {
      const { value } = e.target;
      setSearchQuery(value);
    },
    [searchQuery, setSearchQuery],
  );

  const handleSetSelectedSearchTypes = useCallback(
    ({ id, name }) => {
      setSelectedSearchTypes({
        id,
        name,
      });
    },
    [selectedSearchTypes, setSelectedSearchTypes],
  );

  const handleSetSelectedGenres = useCallback(
    ({ id, name }) => {
      console.log({ id, name });
      const newGnrArray = handleUpdateArray(selectedGenres, { id, name });
      setSelectedGenres(newGnrArray);
    },
    [selectedGenres, setSelectedGenres],
  );

  const handleSetSelectedContries = useCallback(
    ({ id, name, country_fa, country_code }) => {
      console.log({ id, name, country_fa });
      const newCountryArray = handleUpdateArray(selectedCountries, {
        id,
        name,
        country_code,
        country_fa,
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

  const handleSetSelectedSubtitle = useCallback(
    e => {
      setSelectedSubtitle(state => !state);
    },
    [setSelectedSubtitle],
  );

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
    ageRangeIDs,
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

    /** Subtitle */
    queries.append('voice', Number(selectedSubtitle));

    history.push(`/search?${queries.toString()}`);
  };

  const handleApiSide = ({
    searchQuery,
    searchTypes,
    gnrIDs,
    countryCodes,
    ageRangeIDs,
    selectedSubtitle,
  }) => {
    // TODO:
    //  - call related api

    const searchConfig = {
      page: 1,
      limit: globalConfigs.pageLimit,
      text: searchQuery,
      genres: gnrIDs.join(','),
      age_range: ageRangeIDs.join(','),
      country: countryCodes.map(el => el.toLowerCase()).join(','),
      voice: Number(selectedSubtitle),
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

      // search Data
      selectedSearchTypes,
      selectedGenres,
      selectedCountries,
      selectedAgeRange,
      selectedSubtitle,

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
      handleSetSelectedAgeRange,
      handleSetSelectedSubtitle,
    },
  };
};

export default SearchManager;
