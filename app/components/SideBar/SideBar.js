import React from 'react';
import { ButtonWrapper, StyledSidebar, NavLink, NavClose, NavBlankLink, Icon, NavHeader } from "./styles"
import MENU_ICON from 'images/icons8-menu-24.svg';
import LOGOV from 'images/logov.svg';
import { HeaderLogo } from 'containers/App/component/Header/styles.js';
import { useAuthContext } from '../../containers/App/context';
import Button from 'components/kit/Button'
import { FormattedMessage } from 'react-intl';
import messages from './messages'
import Img from 'react-cool-img';

const SideItems = ({ to, label, type, icon, ...rest }) => type === 'BLANK_URL' ? (
    <NavBlankLink target={rest.target} href={to}>
        <Icon src={icon}/>
      
      {label}
    </NavBlankLink>
  ) : (
    <NavLink to={to} {...rest}>
        <Icon src={icon}/>
      {label}
    </NavLink>
  );
function SideBar({ items, isShown, clickHandle}) {
  const { isLoggedIn, handleLogout } = useAuthContext();

    return <StyledSidebar isShown={isShown}>
            <NavHeader>
            <NavClose onClick={clickHandle}>
            <Img style={{ width: '24px' }} src={MENU_ICON}/>
        </NavClose>
        {/* <HeaderLogo to={'/'}>
          <Img src={LOGOV} />
            </HeaderLogo> */}
            </NavHeader>
            {
              isLoggedIn && <ButtonWrapper>
              <Button type="outlined"
              label={<FormattedMessage {...messages.logout} />}
              onClick={handleLogout}/>
            </ButtonWrapper>
            }
        {
            items.filter(itm => !(isLoggedIn && itm.to === '/auth/login'))
            .map((item, i) => <SideItems key={i} onClick={clickHandle} {...item}/>)
        }
    </StyledSidebar>
}

export default SideBar