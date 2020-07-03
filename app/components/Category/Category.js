import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Swiper from 'react-id-swiper';

import CategoryContext from './context';
import { CategoryItem } from './Components';

import {
  CategorySection,
  CategoryHeading,
  CategoryBody,
  Heading,
  ShowMore,
  PrevButton,
  NextButton,
  CategoryItemContainer,
  ActiveItemDescription,
} from './styles';

const Category = ({ category, items }) => {
  /** COMPONENTS STATES */
  const swpierRef = useRef(null);
  const [activeItemId, setActiveItemId] = useState(null);

  /** SLIDER OPTIONS */
  const SliderOptions = useMemo(() => {
    const opt = {};

    opt.lazy = true;
    opt.slidesPerView = 7;
    opt.spaceBetween = 10;

    return opt;
  }, [category, items]);

  /** HANDLERS */
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

  const handleActiveItem = useCallback(
    id => {
      if (id === activeItemId) setActiveItemId(null);
      else setActiveItemId(id);
    },
    [activeItemId],
  );

  return (
    <CategoryContext.Provider value={{ data: { category, activeItemId }, actions: { handleActiveItem } }}>
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
                  <CategoryItem {...item} />
                </CategoryItemContainer>
              ))}
            </Swiper>
          )}

          <NextButton onClick={handleSliderNext}>
            <i className="fas fa-arrow-circle-left" />
          </NextButton>
        </CategoryBody>

        <ActiveItemDescription shouldShow={Boolean(activeItemId)}>API_CALL_HERE</ActiveItemDescription>
      </CategorySection>
    </CategoryContext.Provider>
  );
};

export default Category;
