import React, { useRef, useMemo, useCallback } from 'react';
import Swiper from 'react-id-swiper';

import {
  BannerSection,
  BannerNavigators,
  HeadingBanner,
} from './styles';

const Banner = ({ style, items = [] }) => {
  const swpierRef = useRef(null);

  const isHeadingBanner = useMemo(() => {
    const { type } = style;
    return type === 'full';
  }, [style]);

  const imageSize = useMemo(() => {
    const { type } = style;
    if (type === 'full') return '1920x900';
    if (type === 'long') return '1920x360';
    if (type === 'item') return '517x282';
    if (type === 'quad') return '100x100';
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
              <HeadingBanner key={item.id}>
                {/* <BannerItem>{item.title_fa}</BannerItem> */}
                <img src={item.image_path} className="swiper-lazy" />
              </HeadingBanner>
            ) : (
              <img
                key={item.id}
                src={`${item.image_path}&size=${imageSize}`}
                className="swiper-lazy"
              />
            ),
          )}
        </Swiper>
      )}

      {isHeadingBanner && (
        <BannerNavigators>
          <button onClick={handlePrevSlide}>
            <i className="fas fa-chevron-right" />
          </button>
          <button onClick={handleNextSlide}>
            <i className="fas fa-chevron-left" />
          </button>
        </BannerNavigators>
      )}
    </BannerSection>
  );
};

export default Banner;
