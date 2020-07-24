import React from 'react';
import SEARCH_ICON from 'images/search.svg';

import { SearchContainer, SearchBox, SearchImage, CloseIcon, ClearText } from './styles';

const Search = () => {
  return (
    <SearchContainer>
      <SearchBox>
        <SearchImage src={SEARCH_ICON} alt="search_Icon" />
        <input type="text" />
        <CloseIcon className="fa fa-close" />
        <ClearText>پاک کردن</ClearText>
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;
