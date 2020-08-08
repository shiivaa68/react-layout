import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import useMenuContext from 'containers/App/context';
import { FormattedMessage } from 'react-intl';

import SEARCH from 'images/search.svg';

import { MenuItem, Button } from 'components/kit';
import {
  NavBar,
  HeaderMenu,
  HeaderLogo,
  HeaderDetail,
  SearchIcon,
  HeaderLink,
} from './styles';

import messages from './messages';

function Header({ history }) {
  const { push } = history;

  const { HeaderMenus } = useMenuContext();

  const handleBuyPkgRoute = useCallback(e => push('/package'), []);
  const handleSigninRoute = useCallback(e => push('/auth/login'), []);
  const handleNavigateToSearch = useCallback(e => push('/search'), []);

  return (
    <>
      <NavBar>
        <HeaderMenu>
          {/* <HeaderLogo><img src='logo3.png'/></HeaderLogo> */}
          <HeaderLogo>
            <img
              src="https://tamashakhoneh.ir/content/images/logo3.png"
              width="30"
              height="20"
            />
          </HeaderLogo>

          <HeaderMenu>
            {!!HeaderMenus &&
              HeaderMenus.map(menu => <MenuItem key={menu.id} {...menu} />)}
          </HeaderMenu>
        </HeaderMenu>
        <HeaderDetail>
          <SearchIcon onClick={handleNavigateToSearch}>
            <img src={SEARCH} width="30" height="25" />
          </SearchIcon>
          <Button
            type="text_only"
            label={<FormattedMessage {...messages.buyPkg} />}
            onClick={handleBuyPkgRoute}
          />
          <Button
            type="outlined"
            label={<FormattedMessage {...messages.login_signup} />}
            onClick={handleSigninRoute}
          />
        </HeaderDetail>
      </NavBar>
    </>
  );
}

export default withRouter(Header);
