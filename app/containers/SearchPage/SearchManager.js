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
import RANK_NUMBER from 'constants/RankNumber';
import SUBTITLE_TYPES from 'constants/SubtitleTypes';
import VOICE_TYPES from 'constants/VoiceTypes';

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
  RankContent,
} from './components/FilterComponents';

import messages from './messages';

const SearchPageKeyOnRedux = 'SearchPage';

const SearchManager = ({ history, location }) => {
  /** Constsnts */
  const { START_DATE, STOP_DATE } = BUILT_YEAR_FILTER;
  const { MIN_RANK, MAX_RANK } = RANK_NUMBER;
  // injectors
  useInjectReducer({ key: SearchPageKeyOnRedux, reducer: SearchPageReducer });
  useInjectSaga({ key: SearchPageKeyOnRedux, saga: SearchPageSaga });

  /** States */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSearchTypes, setSelectedSearchTypes] = useState({
    // id: 1,
    // name: SEARCH_TYPES.MOVIES,
    // label: 'فیلم ها',
  });
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedSubtitleTypes, setSelectedSubtitleTypes] = useState([]);
  const [selectedVoiceTypes, setSelectedVoiceTypes] = useState([]);
  const [selectedDubbing, setSelectedDubbing] = useState(false);

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedBuiltYear, setSelectedBuiltYear] = useState([
    // START_DATE,
    // STOP_DATE,
  ]);
  const [selectedRankNumber, setSelectedRankNumber] = useState([
    // MIN_RANK,
    // MAX_RANK,
  ]);

  const [selectedAgeRange, setSelectedAgeRange] = useState([]);

  const [selectedSortTypes, setSelectedSortTypes] = useState(
    [],
    //   {
    //   id: 1,
    //   sortOrder: 'ASC',
    //   sortType: 'imdb_rank',
    //   label: 'امتیاز IMDB (صعودی)',
    //   name: SORT_TYPES.IMDB_RANK_ASC,
    // }
  );
  const [page, setPage] = useState(0);

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
  const {
    movies_data,
    series_data,
    casts_data,
    movies_loading,
    series_loading,
    casts_loading,
  } = useSelector(state => state.SearchPage || InitialState);

  /** Effects */
  /** DECODING PART */
  // useEffect(() => {
  //   console.log({ location });
  //   console.log('___QUERY___', qs.parse(decodeURI(location.search.slice(1))));
  // }, [location]);

  // did mount
  useEffect(() => {
    // getNextPage(page);
    window.scrollTo({ top: 0, left: 0 });
    window.addEventListener('CHANGE_TAB_EVENT', e => {
      setSelectedSearchTypes(e.detail.targetTab);
    });
  }, []);

  useEffect(() => {
    const gnrIDs = selectedGenres.map(gnr => gnr.id);
    const searchTypes = selectedSearchTypes.name;
    const countryCodes = selectedCountries.country_code;
    const ageRangeIDs = selectedAgeRange.id;
    const voiceTypes = selectedVoiceTypes.map(voicetype => voicetype.name);
    const subtitleTypes = selectedSubtitleTypes.map(subtype => subtype.name);
    // console.log({ searchQuery, gnrIDs, countryCodes, ageRangeIDs });

    /** TWO ACTIONS HERE
     *  - keep update url
     *  - call api endpoints
     */
    handleUrlParams({
      page,
      searchQuery,
      searchTypes,
      voiceTypes,
      subtitleTypes,
      gnrIDs,
      countryCodes,
      selectedBuiltYear,
      selectedRankNumber,
      ageRangeIDs,
      selectedDubbing,
      // selectedSortTypes,
    });
    handleApiSide({
      page,
      searchQuery,
      searchTypes,
      voiceTypes,
      subtitleTypes,
      gnrIDs,
      countryCodes,
      selectedBuiltYear,
      selectedRankNumber,
      ageRangeIDs,
      selectedDubbing,
      selectedSortTypes,
    });
  }, [
    page,
    searchQuery,
    selectedSearchTypes,
    selectedSubtitleTypes,
    selectedVoiceTypes,
    selectedGenres,
    selectedCountries,
    selectedBuiltYear,
    selectedRankNumber,
    selectedAgeRange,
    selectedSortTypes,
    selectedDubbing,
  ]);

  useEffect(() => {
    setPage(0);
    resetMovieSearchPage();
    resetSerieSearchPage();
    resetCastsSearchPage();
  }, [
    searchQuery,
    selectedSearchTypes,
    selectedVoiceTypes,
    selectedSubtitleTypes,
    selectedGenres,
    selectedCountries,
    selectedBuiltYear,
    selectedRankNumber,
    selectedAgeRange,
    selectedSortTypes,
    selectedDubbing,
  ]);

  const handleNextPage = useCallback(() => {
    const _page = page + 1;
    setPage(_page);
  }, [page]);

  /** Data handlers */
  const sidebarMenuData = useMemo(() => {
    return [
      // {
      //   menuId: 1,
      //   name: <FormattedMessage {...messages.filterTypes} />,
      //   component: SearchTypeContent,
      // },
      {
        menuId: 1,
        name: <FormattedMessage {...messages.filterGenres} />,
        component: GenresContent,
      },
      {
        menuId: 2,
        name: <FormattedMessage {...messages.filterAge} />,
        component: AgeRangeContent,
      },
      {
        menuId: 3,
        name: <FormattedMessage {...messages.filterCountry} />,
        component: ContryContent,
      },
      {
        menuId: 4,
        name: <FormattedMessage {...messages.filterBuiltYear} />,
        component: BuiltYearContet,
      },
      {
        menuId: 5,
        name: <FormattedMessage {...messages.filterRank} />,
        component: RankContent,
      },
      {
        menuId: 6,
        name: <FormattedMessage {...messages.filterSubtitle} />,
        component: SubtitleContent,
      },
      // {
      //   menuId: 8,
      //   name: <FormattedMessage {...messages.filterSort} />,
      //   component: SortTypeContent,
      // },
    ];
  }, []);

  const searchTypes = useMemo(() => {
    return [
      { id: 1, name: SEARCH_TYPES.MOVIES, label: 'فیلم ها' },
      { id: 2, name: SEARCH_TYPES.SERIES, label: 'سریال ها' },
      { id: 3, name: SEARCH_TYPES.CASTS, label: 'عوامل' },
    ];
  }, []);

  const voiceTypes = useMemo(() => {
    return [
      {
        id: 1,
        name: VOICE_TYPES.ENGLISH,
        label: <FormattedMessage {...messages.voiceEnglish} />,
      },
      {
        id: 2,
        name: VOICE_TYPES.PERSION,
        label: <FormattedMessage {...messages.voicePersion} />,
      },
      {
        id: 3,
        name: VOICE_TYPES.TURKISH,
        label: <FormattedMessage {...messages.voiceTurkish} />,
      },
    ];
  }, []);

  const subtitleTypes = useMemo(() => {
    return [
      {
        id: 1,
        name: SUBTITLE_TYPES.ENGLISH,
        label: <FormattedMessage {...messages.subtitleEnglish} />,
      },
      {
        id: 2,
        name: SUBTITLE_TYPES.PERSION,
        label: <FormattedMessage {...messages.subtitlePersion} />,
      },
    ];
  }, []);

  const sortTypes = useMemo(() => {
    return [
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
    ({ id, name, label }) => {
      const changeTabEvent = new CustomEvent('CHANGE_TYPE_EVENT', {
        detail: { id },
      });

      dispatchEvent(changeTabEvent);
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
      if (country_code === selectedCountries.country_code) {
        setSelectedCountries([]);
        return;
      }
      setSelectedCountries({
        id,
        label,
        country_code,
      });
    },
    [selectedCountries, setSelectedCountries],
  );

  const handleSetSelectedAgeRange = useCallback(
    ({ id, name }) => {
      if (id === selectedAgeRange.id) {
        setSelectedAgeRange([]);
        return;
      }
      setSelectedAgeRange({
        id,
        name,
      });
    },
    [selectedAgeRange, setSelectedAgeRange],
  );

  const handleSetSelectedSortTypes = useCallback(
    // e => {
    //   const { value } = e.target;
    //   setSelectedSortTypes(value);
    //   console.log({name},'hiiiiiiiiiii')
    // },
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
  const handleSetSelectedSubtitleTypes = useCallback(
    ({ id, name, label }) => {
      const newSubArray = handleUpdateArray(selectedSubtitleTypes, {
        id,
        name,
        label,
      });
      setSelectedSubtitleTypes(newSubArray);
    },
    [selectedSubtitleTypes, setSelectedSubtitleTypes],
  );

  const handleSetSelectedVoiceTypes = useCallback(
    ({ id, name, label }) => {
      const newVoiceArray = handleUpdateArray(selectedVoiceTypes, {
        id,
        name,
        label,
      });
      setSelectedVoiceTypes(newVoiceArray);
    },
    [selectedVoiceTypes, setSelectedVoiceTypes],
  );

  const handleSetSelectedDubbing = useCallback(
    e => {
      setSelectedDubbing(state => !state);
    },
    [selectedDubbing, setSelectedDubbing],
  );

  const handleSelectedBuiltYear = useCallback(
    builtRange => {
      setSelectedBuiltYear(builtRange);
    },
    [selectedBuiltYear, setSelectedBuiltYear],
  );

  const handleSelectedRankNumber = useCallback(
    rankNumber => {
      setSelectedRankNumber(rankNumber);
    },
    [selectedRankNumber, setSelectedRankNumber],
  );

  // handle resetFilter
  const handleGeneralResetFilter = useCallback(
    ({ category, id, ...rest }) => {
      switch (true) {
        case category === 'selectedSearchTypes': {
          setSelectedSearchTypes([]);
          //   (
          //     {
          //     id: 1,
          //     name: SEARCH_TYPES.MOVIES,
          //     label: 'فیلم ها',
          // });
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
          setSelectedAgeRange([]);
          break;
        }

        case category === 'selectedCountries': {
          setSelectedCountries([]);
          break;
        }

        case category === 'selectedBuiltYear': {
          setSelectedBuiltYear([]);
          break;
        }

        case category === 'selectedRankNumber': {
          setSelectedRankNumber([MIN_RANK, MAX_RANK]);
          break;
        }

        case category === 'selectedSubtitleTypes': {
          const newSubArray = handleUpdateArray(selectedSubtitleTypes, {
            id,
            name,
            label,
          });
          setSelectedSubtitleTypes(newSubArray);
          break;
        }
        case category === 'selectedVoiceTypes': {
          const newVoiceArray = handleUpdateArray(selectedVoiceTypes, {
            id,
            name,
            label,
          });
          setSelectedVoiceTypes(newVoiceArray);
          break;
        }
        case category === 'selectedDubbing': {
          setSelectedDubbing(false);
          break;
        }
        case category === 'selectedSortTypes': {
          setSelectedSortTypes([]);
          break;
        }

        default:
          break;
      }
    },
    [selectedGenres, selectedAgeRange, selectedCountries],
  );

  const handleResetFilters = useCallback(() => {
    // console.log('RESET_ALL_FILTERS');
    /** RESET FILTERS PART */
    setSelectedSearchTypes([]);
    setSelectedGenres([]);
    setSelectedCountries([]);
    setSelectedBuiltYear([]);
    setSelectedRankNumber([]);
    setSelectedAgeRange([]);
    setSelectedSubtitleTypes([]);
    setSelectedVoiceTypes([]);
    setSelectedDubbing();
    setSelectedSortTypes([]);
  }, []);

  //handle close input search
  const handelResetFilterSearchQuery = useCallback(() => {
    setSearchQuery('');
  }, [searchQuery, setSearchQuery]);

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
    page,
    searchQuery,
    searchTypes,
    subtitleTypes,
    voiceTypes,
    gnrIDs,
    countryCodes,
    selectedBuiltYear,
    selectedRankNumber,
    ageRangeIDs,
    // selectedSortTypes,
    selectedDubbing,
  }) => {
    const queries = new URLSearchParams();

    /** search Query */
    queries.append('query', searchQuery);
    /** Page */
    queries.append('page', Number(page));

    /** search Types */
    queries.append('search_types', searchTypes);

    /** gneres */
    gnrIDs.length > 0 && queries.append('genres', gnrIDs.join(','));

    const [startDate, stopDate] = selectedBuiltYear;
    queries.append('min_year', startDate);
    queries.append('max_year', stopDate);

    const [minrank, maxrank] = selectedRankNumber;
    // console.log(selectedRankNumber);
    queries.append('min_imdb', minrank);
    queries.append('max_imdb', maxrank);

    //sort types
    queries.append('item_sort', selectedSortTypes.sortType);
    queries.append('sort_type', selectedSortTypes.sortOrder);
    /** ageRange */
    queries.append('age_range', ageRangeIDs);

    /** contrycodes */

    queries.append('countries', countryCodes);

    /** Subtitle */
    queries.append('dubbing', selectedDubbing);
    subtitleTypes.length > 0 &&
      queries.append('subtitles', subtitleTypes.join(','));
    voiceTypes.length > 0 && queries.append('voices', voiceTypes.join(','));

    history.push(`/search?${queries.toString()}`);
  };

  const handleApiSide = ({
    page,
    searchQuery,
    searchTypes,
    subtitleTypes,
    voiceTypes,
    selectedDubbing,
    gnrIDs,
    countryCodes,
    selectedBuiltYear,
    selectedRankNumber,
    ageRangeIDs,
    selectedSortTypes,
    // selectedSubtitle,
  }) => {
    // TODO:
    //  - call related api
    const [startDate, stopDate] = selectedBuiltYear;
    const [minrank, maxrank] = selectedRankNumber;
    const searchConfig = {
      page: page === 0 ? 1 : page,
      limit: globalConfigs.pageLimit,
      text: searchQuery,
      genres: gnrIDs.join(','),
      age_range: ageRangeIDs,
      country: countryCodes,
      item_sort: selectedSortTypes.sortType,
      sort_type: selectedSortTypes.sortOrder,
      dubbing: selectedDubbing,
      min_year: startDate,
      max_year: stopDate,
      min_imdb: minrank,
      max_imdb: maxrank,
      voices: voiceTypes.join(','),
      subtitles: subtitleTypes.join(','),
    };

    switch (searchTypes) {
      case SEARCH_TYPES.MOVIES: {
        // console.log('should call ALL MOVIES');
        getMovieSearchPage({ searchConfig });
        resetSerieSearchPage();
        resetCastsSearchPage();
        break;
      }
      case SEARCH_TYPES.SERIES: {
        // console.log('should call ALL SERIES');
        getSeriesSearchPage({ searchConfig });
        resetMovieSearchPage();
        resetCastsSearchPage();
        break;
      }
      case SEARCH_TYPES.CASTS: {
        // console.log('should call ALL CASTS');
        getCastsSearchPage({ searchConfig });
        resetMovieSearchPage();
        resetSerieSearchPage();
        // reset > movie , serie
        break;
      }

      default:
        // console.log('do nothing...');
        break;
    }
  };

  return {
    data: {
      // base data
      searchQuery,
      sidebarMenuData,
      searchTypes,
      subtitleTypes,
      voiceTypes,
      genres,
      country,
      agerange,
      sortTypes,

      // configured data
      selectedSearchTypes,
      selectedSubtitleTypes,
      selectedVoiceTypes,
      selectedGenres,
      selectedCountries,
      selectedRankNumber,
      selectedAgeRange,
      selectedDubbing,
      selectedSortTypes,
      selectedBuiltYear,

      // result data

      movies_data,
      series_data,
      casts_data,
      movies_loading,
      series_loading,
      casts_loading,
    },
    action: {
      handleSetSearchQuery,
      handleSetSelectedSearchTypes,
      handleSetSelectedGenres,
      handleSetSelectedContries,
      handleSelectedBuiltYear,
      handleSelectedRankNumber,
      handleSetSelectedAgeRange,
      handleSetSelectedDubbing,
      handleSetSelectedSortTypes,
      handleGeneralResetFilter,
      handleResetFilters,
      handelResetFilterSearchQuery,
      handleNextPage,
      handleSetSelectedSubtitleTypes,
      handleSetSelectedVoiceTypes,
    },
  };
};

export default SearchManager;
