import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  NavBar,
  HeaderMenu,
  HeaderLogo,
  HeaderDetail,
  SearchIcon,
} from './styledComponents';
import { MenuItem, Button } from './components';


import messages from './messages';
function Header() {
  const menus = [
    { id: 1, messageId: 'home', to: '/' },
    { id: 2, messageId: 'films', to: '/films' },
    { id: 3, messageId: 'series', to: '/series' },
    { id: 4, messageId: 'categories', to: '/categories' },
  ];

  return (
    <>
      <NavBar>
        <HeaderMenu>
          <HeaderLogo>تماشاخونه</HeaderLogo>
          <HeaderMenu>
            {menus.map(menu => (
              <MenuItem key={menu.id} {...menu} />
            ))}
          </HeaderMenu>
        </HeaderMenu>
        <HeaderDetail>
          <SearchIcon>S</SearchIcon>
          <Button
            label={<FormattedMessage {...messages.buyPkg} />}
            type="stripped"
          />
          <Button
            label={<FormattedMessage {...messages.login_signup} />}
            type="outlined"
          />
        </HeaderDetail>
      </NavBar>
    </>
  );
}

export default Header;
