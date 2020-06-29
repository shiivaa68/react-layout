import React, { useMemo } from 'react';
import Swiper from 'react-id-swiper';

import { BannerSection } from './styles';

const Banner = ({ style, items = [] }) => {
  const options = useMemo(() => {
    const { type } = style;
    const opt = {};

    opt.lazy = true;

    switch (type) {
      case 'full':
        opt.slidesPerView = 1;
        opt.spaceBetween = 0;
        break;

      case 'item':
        opt.slidesPerView = 4;
        opt.spaceBetween = 10;

        break;

      default:
        break;
    }

    return opt;
  }, [style, items]);

  return (
    <BannerSection>
      {items.length > 0 && (
        <Swiper {...options}>
          {items.map(item => (
            <img key={item.id} src={item.image_path} />
          ))}
        </Swiper>
      )}
    </BannerSection>
  );
};

export default Banner;
