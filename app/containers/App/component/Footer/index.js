import React from 'react';
import useMenuContext from 'containers/App/context';

import { MenuItem } from 'components/kit';
import {
  Wrapper,
  FooterLayoutContainer,
  FooterMenu,
  FooterSocial,
  FooterCopyRight,
} from './style';

function Footer() {
  const { FooterMenus } = useMenuContext();

  return (
    <Wrapper>
      <FooterLayoutContainer>
        <FooterMenu>
          {!!FooterMenus &&
            FooterMenus.map(menu => <MenuItem key={menu.id} {...menu} />)}
        </FooterMenu>
        <FooterSocial>
          <ul>
            <li>
              <a href="https://t.me/junk">TELEGRAM</a>
            </li>
            <li>
              <a href="https://t.me/el">INSTAGRAM</a>
            </li>
            <li>
              <a href="https://t.me/jake">TWITTER</a>
            </li>
          </ul>
          <div>NAMAD</div>
        </FooterSocial>
        <FooterCopyRight>FOOTER_COPY_RIGHT</FooterCopyRight>
      </FooterLayoutContainer>
    </Wrapper>
  );
}

export default Footer;
