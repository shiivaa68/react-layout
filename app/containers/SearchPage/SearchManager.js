import React, { useState, useMemo, useCallback, useEffect } from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { GenresContent, ContryContent } from './components/FilterComponents';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SearchManager = ({ history, location }) => {
  /** States */
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  /** Redux Data */
  const { genres, country } = useSelector(state => state.global);

  /** Effects */
  useEffect(() => {
    const gnrIDs = selectedGenres.map(gnr => gnr.id);
    const countryCodes = selectedCountries.map(country => country.country_code);

    /** TWO ACTIONS HERE
     *  - keep update url
     *  - call api endpoints
     */
    handleUrlParams({ gnrIDs, countryCodes });
    handleApiSide({ gnrIDs, countryCodes });

    // console.log({ gnrIDs, countryCodes });
  }, [selectedGenres, selectedCountries]);

  /** DECODING PART */
  // useEffect(() => {
  //   console.log({ location });
  //   console.log('___QUERY___', qs.parse(decodeURI(location.search.slice(1))));
  // }, [location]);

  /** Logic handlers */
  const handleSetSelectedGenres = useCallback(
    ({ id, name }) => {
      const newGnrArray = handleUpdateArray(selectedGenres, { id, name });
      setSelectedGenres(newGnrArray);
    },
    [selectedGenres, setSelectedGenres],
  );

  const handleSetSelectedContries = useCallback(
    ({ id, name, country_code }) => {
      const newCountryArray = handleUpdateArray(selectedCountries, {
        id,
        name,
        country_code,
      });
      setSelectedCountries(newCountryArray);
    },
    [selectedCountries, setSelectedCountries],
  );

  /** Data handlers */
  const sidebarMenuData = useMemo(() => {
    return [
      {
        menuId: 1,
        name: <FormattedMessage {...messages.filterGenres} />,
        component: GenresContent,
      },
      {
        menuId: 2,
        name: <FormattedMessage {...messages.filterCountry} />,
        component: ContryContent,
      },
      {
        menuId: 3,
        name: <FormattedMessage {...messages.filterSubtitle} />,
        component: () => <>SUBTITLE</>,
      },
      {
        menuId: 4,
        name: <FormattedMessage {...messages.filterBuiltYear} />,
        component: () => <>BUILT_YEAR</>,
      },
      {
        menuId: 5,
        name: <FormattedMessage {...messages.filterSort} />,
        component: () => <>SORT_COMP</>,
      },
    ];
  }, []);

  /** UTILS */
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

  const handleUrlParams = ({ gnrIDs, countryCodes }) => {
    const queries = new URLSearchParams();

    /** gneres */
    gnrIDs.length > 0 && queries.append('genres', gnrIDs.join(','));

    /** contrycodes */
    countryCodes.length > 0 &&
      queries.append('countries', countryCodes.join(','));

    console.log({ query: queries.toString() });
    history.push(`/search?${queries.toString()}`);
  };

  const handleApiSide = ({ gnrIDs, countryCodes }) => {
    // TODO:
    //  - call related api
  };

  return {
    data: { sidebarMenuData, genres, country },
    action: { handleSetSelectedGenres, handleSetSelectedContries },
  };
};

export default SearchManager;
