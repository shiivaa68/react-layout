import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import Swiper from 'react-id-swiper';

import CategoryContext from './context';
import { CategoryItem } from './Components';
import { PublicRoutes } from 'utils/routes';

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
  /** GETTING REQUIRED FUNCTION FROM WITH ROUTER */
  const { push } = history;

  /** COMPONENTS STATES */
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
    selectedItem => {
      if (activeItem && selectedItem.id === activeItem.id) setActiveItem(null);
      else setActiveItem(selectedItem);
    },
    [activeItem],
  );

  /** ایتم اکتیو را میگیریم و ایز سریز را ازش میکشیم بیرون و از طریق اون تصمیم میگیریم که کجا بفرستیمش */
  const handleNavigateToPage = useCallback(() => {
    const { id, is_series } = activeItem;

    if (is_series) push(PublicRoutes.serieDetailRoute(id));
    else push(PublicRoutes.movieDetailRoute(id));
  }, [activeItem]);

  const handleNavigateToListView = useCallback(() => {
    const { id, item_sort, sort_type } = category;
    push(PublicRoutes.listViewRoute({ id, item_sort, sort_type }));
  }, []);

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
                  <CategoryItem {...item} />
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
            <h2>API_CALL_HERE</h2>
            <button onClick={handleNavigateToPage}>MORE</button>
          </div>
          <pre>{JSON.stringify(activeItem, null, 2)}</pre>
        </ActiveItemDescription>
      </CategorySection>
    </CategoryContext.Provider>
  );
};

export default withRouter(Category);
