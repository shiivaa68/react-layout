import React, { useRef, useCallback, useMemo, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { withRouter } from 'react-router-dom';
import { PublicRoutes } from 'utils/routes';
import CategoryItem from '../CategoryItem';
import CategoryContext from './context';

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

const Category = ({ history, category, items }) => {
  const { push } = history;

  const swpierRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

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

  const handleNavigateToListView = useCallback(() => {
    const { id, item_sort, sort_type } = category;
    push(PublicRoutes.listViewRoute({ category_id: id, item_sort, sort_type }));
  }, []);

  const handleActiveItem = useCallback(
    selectedItem => {
      if (activeItem && selectedItem.id === activeItem.id) setActiveItem(null);
      else setActiveItem(selectedItem);
    },
    [activeItem],
  );

  const handleNavigateToPage = useCallback(() => {
    const { id, is_series } = activeItem;
    if (is_series) push(PublicRoutes.serieDetailRoute(id));
    else push(PublicRoutes.movieDetailRoute(id));
  }, [activeItem]);

  return (
    <CategoryContext.Provider value={{ data: { category, activeItem }, actions: { handleActiveItem } }}>
      <CategorySection>
        <CategoryHeading>
          <Heading onClick={handleNavigateToListView}>{(!!category && category.name_fa) || ''}</Heading>
          <ShowMore onClick={handleNavigateToListView}>
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
        <ActiveItemDescription shouldShow={!!activeItem}>
          <div>
            <button onClick={handleNavigateToPage}>more.....</button>
          </div>

          <pre>{JSON.stringify(activeItem, null, 2)}</pre>
        </ActiveItemDescription>
      </CategorySection>
    </CategoryContext.Provider>
  );
};

export default withRouter(Category);
