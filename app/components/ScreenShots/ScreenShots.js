import React from 'react';
import { ScreenShotWrapper, screen } from './styles';

const ScreenShots = ({ screenshots, m3u8_path }) => (
  <ScreenShotWrapper>
    {screenshots &&
      screenshots.length > 0 &&
      screenshots.map(screen => (
        <screen>
          <img src={screen} />
        </screen>
      ))}
  </ScreenShotWrapper>
);

export default ScreenShots;
