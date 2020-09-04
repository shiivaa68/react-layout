import React, { useRef, useMemo, useCallback } from 'react';
import { ParseUrl } from '../../utils/routes';

import { withRouter } from 'react-router-dom';
import { PublicRoutes } from 'utils/routes/PublicRoutes';

import Swiper from 'react-id-swiper';
import Img from 'react-cool-img';
import {
  BannerSection,
  BannerNavigators,
  HeadingBanner,
  NextButton,
  PrevButton,
  MySwiperContainer,
  OtherBannerNavigators,
} from './styles';
import useMyMediaQuery from '../../utils/useMyMediaQuery';

const Banner = ({ style, items = [], history }) => {

  const { isMobile } = useMyMediaQuery();
  const swpierRef = useRef(null);
  const swiperRefOtherBanner = useRef(null);

  const isHeadingBanner = useMemo(() => {
    const { type } = style;
    return type === 'full';
  }, [style]);

  const isOtherBanner = useMemo(() => {
    const { type } = style;
    return type !== 'full'; // type === 'long' || type === 'item' || type === 'quad';
  }, [style]);

  const imageSize = useMemo(() => {
    const { type } = style;
    if (type === 'full') return '1920x900';
    if (type === 'long') return '1920x360';
    if (type === 'item') return '517x282';
    if (type === 'quad') return '100x100';
  }, [style]);

  const callPageSingle = useCallback(item => {
    const { url } = item;
    const { id, kind } = ParseUrl(url);

    switch (kind) {
      case 'MOVIE':
        history.push(PublicRoutes.movieDetailRoute(id));
        break;

      case 'SERIES':
        history.push(PublicRoutes.seriesDetailRoute(id));
        break;

      case 'PAGE':
        history.push(PublicRoutes.pageSingle(id));
        break;

      default:
        break;
    }
  }, []);

  /** slider options */
  const options = useMemo(() => {
    const { type } = style;
    const opt = {};

    opt.lazy = true;
    opt.rebuildOnUpdate =true;
    switch (type) {
      case 'full':
        opt.effect= 'fade'
        if(isMobile) {
          opt.pagination = {
            el: '.swiper-pagination',
            type: 'bullets'
          }
        }
        opt.slidesPerView = 1;
        opt.spaceBetween = 0;
        opt.loop = true;
        opt.speed = 2000,
        opt.autoplay = {
          delay: 3000,
          disableOnInteraction: false,
        };
        break;
      case 'long':
        opt.slidesPerView = 1;
        opt.spaceBetween = 0;
        break;

      case 'item':
        if (isMobile) {
          opt.slidesPerView = 2;
          opt.slidesPerColumn = 2;
        } else opt.slidesPerView = 4;
        break;

      case 'quad':
        opt.slidesPerView = 4;
        opt.spaceBetween = 10;
        break;

      default:
        break;
    }

    return opt;
  }, [style, items, isMobile]);

  const extraOptions = {};
  if (isHeadingBanner) extraOptions.ref = swpierRef;

  const extraOptionOther = {};
  if (isOtherBanner) extraOptionOther.ref = swiperRefOtherBanner;

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

  //handler other banner

  const getBannerImgSrc = useCallback((path) => {
    if (isMobile)
      return `${path}&platform=1&size=${window.innerWidth}x${parseInt(window.innerWidth * 18 / 15)}`
    return `${path}&size=${1920}x${720}`
  })
  const handlePrevSlideOther = useCallback(() => {
    if (swiperRefOtherBanner.current !== null && swiperRefOtherBanner.current.swiper !== null) {
      swiperRefOtherBanner.current.swiper.slidePrev();
    }
  }, [swiperRefOtherBanner]);

  const handleNextSlideOther = useCallback(() => {
    if (swiperRefOtherBanner.current !== null && swiperRefOtherBanner.current.swiper !== null) {
      swiperRefOtherBanner.current.swiper.slideNext();
    }
  }, [swiperRefOtherBanner]);

  return (
    <BannerSection>
      {items.length > 0 && isHeadingBanner && (
        <MySwiperContainer>
          <Swiper {...options} {...extraOptions} {...extraOptionOther}>
              {items.map((item, i) => (
                  <Img key={i} src={getBannerImgSrc(item.image_path)} className="swiper-lazy" onClick={() => callPageSingle(item)} />
              ))}
          </Swiper>
        </MySwiperContainer>
      )}
      {items.length > 0 && (
        <Swiper {...options} {...extraOptions} {...extraOptionOther}>
          {isOtherBanner &&
            items.map(item => (
              <Img
                key={item.id}
                src={`${item.image_path}&size=${imageSize}`}
                className="swiper-lazy"
                onClick={() => callPageSingle(item)}
              />
            ))}
        </Swiper>
      )}

      {isHeadingBanner && !isMobile ? (
        <BannerNavigators>
          <button style={{cursor: 'pointer'}} onClick={handlePrevSlide}>
            <i className="fas fa-chevron-right" />
          </button>
          <button style={{cursor: 'pointer'}} onClick={handleNextSlide}>
            <i className="fas fa-chevron-left" />
          </button>
        </BannerNavigators>
      ) : null}

      {/** items.length might change regarded to responsive breakpoints */}
      {isOtherBanner && items.length > 4 ? (
        <>
          <PrevButton onClick={handlePrevSlideOther}>
            <i className="fas fa-arrow-circle-right" />
          </PrevButton>
          <NextButton onClick={handleNextSlideOther}>
            <i className="fas fa-arrow-circle-left" />
          </NextButton>
        </>
      ) : null}
    </BannerSection>
  );
};

export default withRouter(Banner);