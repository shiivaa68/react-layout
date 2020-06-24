import React from 'react';
import { FormattedMessage } from 'react-intl';
import {FooterItem} from './component';
import {MainFooter} from './stylecomponent';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';


function Footer() {
  const Lists = [
    { id: 1, messageId: 'aboutTamashakhoneh', to: '/' },
    { id: 2, messageId: 'blog', to: '/blog' },
    { id: 3, messageId: 'question', to: '/question' },
    { id: 4, messageId: 'application', to: '/application' },
    { id: 5, messageId: 'contactus', to: '/contact-us' },
    { id: 6, messageId: 'aboutUs', to: '/aboutUs' },
    { id: 7, messageId: 'rules', to: '/rules' },
    { id: 8, messageId: 'buy', to: '/buy' },
    { id: 9, messageId: 'situasionUseInternet', to: '/situasion-use-internet' },

  ];

  return (
    <Wrapper>
      {/* <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
            </section> */}
      <MainFooter>
        {
          Lists.map(List=>(
            <FooterItem key={List.id} {...list}/>
          ))
                  }

      </MainFooter>
      <LegalFooter></LegalFooter>
      <SocialFooter></SocialFooter>

    </Wrapper>
  );
}

export default Footer;
