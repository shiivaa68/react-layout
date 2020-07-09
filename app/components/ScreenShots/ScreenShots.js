import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { ScreenShotWrapper, Title } from './styles';

const ScreenShots = ({ screenshots, m3u8_path }) => {
  return (
    <ScreenShotWrapper>
      <Title>
        <FormattedMessage {...messages.title} />
      </Title>
      <SRLWrapper>
        {m3u8_path && (
          <a href={m3u8_path} data-attribute="SRL">
            <img src={m3u8_path} width={200} />
          </a>
        )}
        {screenshots &&
          screenshots.length > 0 &&
          screenshots.map((image, i) => (
            <a href={image} data-attribute="SRL" key={i}>
              <img src={image} width={200} />
            </a>
          ))}
      </SRLWrapper>
    </ScreenShotWrapper>
  );
};

export default ScreenShots;
