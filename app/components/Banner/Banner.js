import React, { useRef, useMemo, useCallback } from 'react';
import Swiper from 'react-id-swiper';

import { BannerSection, BannerItem, BannerNavigators } from './styles';

const Banner = ({ style, items = [], index }) => {
  const swpierRef = useRef(null);

  console.log({ index });

  const isHeadingBanner = useMemo(() => {
    const { type } = style;
    return type === 'full' && index === 0;
  }, [style]);

  /** slider options */
  const options = useMemo(() => {
    const { type } = style;
    const opt = {};

    opt.lazy = true;

    switch (type) {
      case 'full':
        opt.slidesPerView = 1;
        opt.spaceBetween = 0;
        opt.loop = true;
        opt.autoplay = {
          delay: 2500,
          disableOnInteraction: false,
        };
        break;

      case 'long':
        opt.slidesPerView = 1;
        opt.spaceBetween = 0;
        break;

      case 'item':
        opt.slidesPerView = 4;
        opt.spaceBetween = 10;
        break;

      case 'quad':
        opt.slidesPerView = 4;
        opt.spaceBetween = 10;
        break;

      default:
        break;
    }

    return opt;
  }, [style, items]);

  const extraOptions = {};
  if (isHeadingBanner) extraOptions.ref = swpierRef;

  /** handlers */
  const handlePrevSlide = useCallback(() => {
    if (swpierRef.current !== null && swpierRef.current.swiper !== null) {
      swpierRef.current.swiper.slidePrev();
    }
  }, [swpierRef]);

  const handleNextSlide = useCallback(() => {
    if (swpierRef.current !== null && swpierRef.current.swiper !== null) {
      swpierRef.current.swiper.slideNext();
    }
  }, [swpierRef]);

  return (
    <BannerSection>
      {items.length > 0 && (
        <Swiper {...options} {...extraOptions}>
          {items.map(item =>
            isHeadingBanner ? (
              <div key={item.id} style={{ minHeight: 250 }}>
                <BannerItem>{item.title_fa}</BannerItem>
                <img src={item.image_path} />
              </div>
            ) : (
              <img key={item.id} src={item.image_path} />
            ),
          )}
        </Swiper>
      )}

      {isHeadingBanner && (
        <BannerNavigators>
          <button onClick={handlePrevSlide}>
            <i className="icon-right-open" />
          </button>
          <button onClick={handleNextSlide}>
            <i className="icon-left-open" />
          </button>
        </BannerNavigators>
      )}
    </BannerSection>
  );
};

export default Banner;
