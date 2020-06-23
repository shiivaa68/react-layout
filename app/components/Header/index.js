import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import { NavBar } from './styledComponents';
import messages from './messages';

function Header() {
  return (
    <>
      {/* <div> */}
      {/* <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar> */}

      {/* </div> */}
      <NavBar>
        <div>
          <div>
            <h1 id="logo">تماشا خونه</h1>
            <ul>خانه</ul>
            <ul>فیلم ها</ul>
            <ul>سریال ها</ul>
          </div>
          <div>
          <div />
        </div>
      </NavBar>
    </>
  );
}

export default Header;
