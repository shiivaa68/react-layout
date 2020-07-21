import React, { useMemo } from 'react';
import useMenuContext from 'containers/App/context';

import INSTA from 'images/instagram.svg';
import TWITTER from 'images/twiter.svg';
import TELEGRAM from 'images/telegram.svg';

import { MenuItem } from 'components/kit';
import { Wrapper, FooterLayoutContainer, FooterMenu, FooterSocial, FooterCopyRight } from './style';

function Footer() {
  const { FooterMenus } = useMenuContext();

  const socialData = useMemo(() => {
    return [
      { id: 0, uri: 'https://www.instagram.com/tmk_ir/', image: INSTA },
      { id: 1, uri: 'https://t.me/el', image: TELEGRAM },
      { id: 2, uri: 'https://t.me/jake', image: TWITTER },
    ];
  }, []);

  return (
    <Wrapper>
      <FooterLayoutContainer>
        <FooterMenu>{!!FooterMenus && FooterMenus.map(menu => <MenuItem key={menu.id} {...menu} />)}</FooterMenu>
        <FooterSocial>
          <ul>
            {socialData.map(social => (
              <li key={social.id}>
                <a target="_blank" href={social.uri}>
                  <img alt="social icon" src={social.image} />
                </a>
              </li>
            ))}
          </ul>
          <div>NAMAD</div>
        </FooterSocial>
        <FooterCopyRight>
          <p>
            خدمات ارایه شده در تماشاخونه، دارای مجوز های لازم از مراجع مربوطه می باشد و هر گونه بهره برداری و سوء
            استفاده از محتوای تماشاخونه، پیگرد قانونی دارد.
          </p>
        </FooterCopyRight>
      </FooterLayoutContainer>
    </Wrapper>
  );
}

export default Footer;
