import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useMenuContext } from 'containers/App/context';
import { FormattedMessage } from 'react-intl';
import AUTH_FLOW_STEPS from 'constants/authFlow';

import { useAuthContext } from '../../context';

import SEARCH from 'images/search.svg';

import { MenuItem, Button } from 'components/kit';
import {
  NavBar,
  HeaderMenu,
  HeaderLogo,
  HeaderDetail,
  SearchIcon,
} from './styles';

import messages from './messages';

function Header({ history, location }) {
  const { push } = history;

  const {
    HeaderMenus,
    actions: { updateStep },
  } = useMenuContext();
  const { isLoggedIn, handleLogout } = useAuthContext();

  const handleBuyPkgRoute = useCallback(e => push('/packages'), []);
  const handleSigninRoute = useCallback(e => {
    if (location.pathname === '/auth/login') {
      updateStep(AUTH_FLOW_STEPS.ENTER_PHONE_NUMBER);
    }
    push('/auth/login');
  }, []);
  const handleNavigateToSearch = useCallback(e => push('/search'), []);
  const handleLogoutBtn = useCallback(
    e => {
      handleLogout();
      push('/');
    },
    [isLoggedIn],
  );

  return (
    <>
      <NavBar>
        <HeaderMenu>
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

          {isLoggedIn ? (
            <Button type="outlined" label="Logout" onClick={handleLogoutBtn} />
          ) : (
            <Button
              type="outlined"
              label={<FormattedMessage {...messages.login_signup} />}
              onClick={handleSigninRoute}
            />
          )}
        </HeaderDetail>
      </NavBar>
    </>
  );
}

export default withRouter(Header);
