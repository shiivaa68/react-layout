import React, { useRef, useCallback, useMemo } from 'react';
import Swiper from 'react-id-swiper';

import {
  CategorySection,
  CategoryHeading,
  CategoryBody,
  Heading,
  ShowMore,
  FooterCategory,
  PrevButton,
  NextButton,
} from './styles';

const Category = ({ category, items }) => {
  const swpierRef = useRef(null);

  const options = useMemo(() => {
    const opt = {};

    opt.lazy = true;
    opt.slidesPerView = 7;
    opt.spaceBetween = 10;

    return opt;
  }, [category, items]);

  const imageSize = useMemo(() => {
    const { style } = category;
    if (style === 'normal') return '216x331';
    else if (style === 'special') return '420x840';
  }, [category]);

  const handleSliderPrev = useCallback(() => {
    if (swpierRef.current !== null && swpierRef.current.swiper !== null) {
      swpierRef.current.swiper.slidePrev();
    }
  }, []);

  const handleSliderNext = useCallback(() => {
    if (swpierRef.current !== null && swpierRef.current.swiper !== null) {
      swpierRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <CategorySection>
      <CategoryHeading>
        <Heading>{(!!category && category.name_fa) || ''}</Heading>
        <ShowMore>
          <div>
            <span>نمایش همه</span>
          </div>
          <div>
            <i className="icon-left-open" />
          </div>
        </ShowMore>
      </CategoryHeading>
      <CategoryBody>
        <PrevButton onClick={handleSliderPrev}>
          <i className="icon-right-open" />
        </PrevButton>
        {items.length > 0 && (
          <Swiper {...options} ref={swpierRef}>
            {items.map(item => (
              <div key={item.id}>
                <img
                  width="100%"
                  src={`${item.poster_path}?size=${imageSize}`}
                />
                <FooterCategory>{item.title_fa}</FooterCategory>
              </div>
            ))}
          </Swiper>
        )}
        <NextButton onClick={handleSliderNext}>
          <i className="icon-left-open" />
        </NextButton>
      </CategoryBody>
    </CategorySection>
  );
};

export default Category;
