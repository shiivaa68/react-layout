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
              <a href="https://t.me/junk"><i className=" icon-paper-plane-empty"></i></a>
            </li>
            <li>
              <a href="https://t.me/el"><i className="icon-camera-alt"></i></a>
            </li>
            <li>
              <a href="https://t.me/jake"><i className="icon-twitter"></i></a>
            </li>
          </ul>
          <div>NAMAD</div>
        </FooterSocial>
        <FooterCopyRight>
          <p>
          خدمات ارایه شده در تماشاخونه، دارای مجوز های لازم از مراجع مربوطه می باشد و هر گونه بهره برداری و سوء استفاده از محتوای تماشاخونه، پیگرد قانونی دارد.
          </p>
          </FooterCopyRight>
      </FooterLayoutContainer>
    </Wrapper>
  );
}

export default Footer;
