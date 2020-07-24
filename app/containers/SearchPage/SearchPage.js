import React from 'react';
import { Search, Filter, Result } from './components';
import { SearchWrapper } from './styles';

const SearchPage = () => {
  return (
    <SearchWrapper>
      <Search />
      <Filter />
      <Result />
    </SearchWrapper>
  );
};

export default SearchPage;
