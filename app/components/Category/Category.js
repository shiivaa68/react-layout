import React, { useRef, useCallback, useMemo } from 'react';
import Swiper from 'react-id-swiper';

import CategoryItem from '../CategoryItem';

import {
  CategorySection,
  CategoryHeading,
  CategoryBody,
  Heading,
  ShowMore,
  FooterCategory,
  PrevButton,
  NextButton,
  CategoryItemContainer,
} from './styles';

const Category = ({ category, items }) => {
  const swpierRef = useRef(null);

  /** SLIDER OPTIONS */
  const SliderOptions = useMemo(() => {
    const opt = {};

    opt.lazy = true;
    opt.slidesPerView = 7;
    opt.spaceBetween = 10;

    return opt;
  }, [category, items]);

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
        <ShowMore to="/detail">
          <span>نمایش همه</span>
          <i className="fas fa-angle-double-left" />
        </ShowMore>
      </CategoryHeading>
      <CategoryBody>
        <PrevButton onClick={handleSliderPrev}>
          <i className="fas fa-arrow-circle-right" />
        </PrevButton>

        {items.length > 0 && (
          <Swiper {...SliderOptions} ref={swpierRef}>
            {items.map(item => (
              <CategoryItemContainer key={item.id}>
                <CategoryItem category={category} {...item} />
              </CategoryItemContainer>
            ))}
          </Swiper>
        )}

        <NextButton onClick={handleSliderNext}>
          <i className="fas fa-arrow-circle-left" />
        </NextButton>
      </CategoryBody>
    </CategorySection>
  );
};

export default Category;
