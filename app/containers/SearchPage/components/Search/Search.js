import React from 'react';
import SEARCH_ICON from 'images/search.svg';
import { FormattedMessage } from 'react-intl';
import messages from '../../messages';

import { SearchContainer, SearchBox, SearchImage, SearchInput, ClearText } from './styles';

const Search = () => {
  return (
    <SearchContainer>
      <SearchBox>
        <SearchImage src={SEARCH_ICON} alt="search_Icon" />
        {/** REACT =>> Search for renderprops in react to learn more about this piece of code */}
        <FormattedMessage {...messages.searchPlaceHolder}>
          {placeholder => <SearchInput type="text" placeholder={placeholder} />}
        </FormattedMessage>
        {/** ------- */}
        <ClearText>
          <FormattedMessage {...messages.clearSearch} />
        </ClearText>
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;
