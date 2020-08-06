import React from 'react';
import { SearchContext } from './context';
import { Search, Filter, Result } from './components';
import { SearchWrapper } from './styles';
import SearchManager from './SearchManager';

const SearchPage = props => {
  const { data, action ,location } = SearchManager(props);


  return (
    <SearchContext.Provider value={{ data, action,location}}>
      <SearchWrapper>
        <Search />
        <Filter />
        <Result />
      </SearchWrapper>
    </SearchContext.Provider>
  );
};

export default SearchPage;
