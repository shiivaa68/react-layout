import React from 'react';

import SEARCH_ICON from 'images/search.svg';
import CLOSE_ICON from 'images/close.svg';

import { FormattedMessage } from 'react-intl';
import useSearchContext from 'containers/SearchPage/context';
import messages from '../../messages';

import {
  SearchContainer,
  SearchBox,
  SearchImage,
  SearchInput,
  ClearText,
  CloseSearch,
} from './styles';

const Search = () => {
  const {
    data: { searchQuery },
    action: { handleSetSearchQuery },
  } = useSearchContext();

  return (
    <SearchContainer>
      <SearchBox>
        <SearchImage src={SEARCH_ICON} alt="search_Icon" />
        {/** REACT =>> Search for renderprops in react to learn more about this piece of code */}
        <FormattedMessage {...messages.searchPlaceHolder}>
          {placeholder => (
            <SearchInput
              type="text"
              value={searchQuery}
              onChange={handleSetSearchQuery}
              placeholder={placeholder}
            />
          )}
        </FormattedMessage>
        {/** ------- */}

        <CloseSearch src={CLOSE_ICON} alt="close-search" />
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;