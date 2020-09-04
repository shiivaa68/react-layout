import React from 'react';
import { SearchContext } from './context';
import { Search, Filter, Result } from './components';
import { SearchWrapper } from './styles';
import SearchManager from './SearchManager';
import ScrollToTopButton from './components/ScrollToTopButton';
import useMyMediaQuery from '../../utils/useMyMediaQuery';

const SearchPage = props => {
  const { data, action ,location } = SearchManager(props);
  const { isMobile } = useMyMediaQuery();

  return (
    <SearchContext.Provider value={{ data, action,location}}>
      <SearchWrapper>
        <Search />
        <Filter isMobile={isMobile}/>
        <Result />
        <ScrollToTopButton />
      </SearchWrapper>
    </SearchContext.Provider>
  );
};

export default SearchPage;
