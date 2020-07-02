import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import useMenuContext from 'containers/App/context';
import { FormattedMessage } from 'react-intl';

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
  const handleSigninRoute = useCallback(e => push('/signin'), []);

  return (
    <>
      <NavBar>
        <HeaderMenu>
          <HeaderLogo>تماشاخونه</HeaderLogo>
          <HeaderMenu>
            {!!HeaderMenus &&
              HeaderMenus.map(menu => <MenuItem key={menu.id} {...menu} />)}
          </HeaderMenu>
        </HeaderMenu>
        <HeaderDetail>
          <SearchIcon>
            <i className="fas fa-search" />
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
