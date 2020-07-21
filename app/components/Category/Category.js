import React, { useRef, useCallback, useMemo, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { withRouter } from 'react-router-dom';
import { PublicRoutes } from 'utils/routes';
import CategoryItem from '../CategoryItem';
import CategoryContext from './context';

import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import Button from '../kit/Button';
import messages from './messages';

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
  ContanerAccordion,
  PosterWrapper,
  InformationFilm,
  TitleAccordion,
  DescriptionAccordion,
  BGImage,
  Dim,
  RangeAgeStyle,
  Genrs,
} from './styles';

const Category = ({ history, category, items }) => {
  const { push } = history;

  const swpierRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const { country = [] } = useSelector(state => state.global);
  const { agerange = [] } = useSelector(state => state.global);
  const { genres = [] } = useSelector(state => state.global);

  /** SLIDER OPTIONS */
  const SliderOptions = useMemo(() => {
    const opt = {};

    opt.lazy = true;
    opt.slidesPerView = 7;
    opt.spaceBetween = 10;

    return opt;
  }, [category, items]);

  // useEffect(() => {
  //   console.log('>>>>> ', { country, agerange, genres, activeItem });
  // }, [country, agerange, genres, activeItem]);

  //genrs accordion

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
    if (is_series) push(PublicRoutes.seriesDetailRoute(id));
    else push(PublicRoutes.movieDetailRoute(id));
  }, [activeItem]);

  const GnrsData = useMemo(() => {
    console.log({ genres, activeItem });

    const itemGnrs = activeItem && activeItem.genres;

    const result = [];
    itemGnrs &&
      itemGnrs.length > 0 &&
      itemGnrs.forEach(genresId => {
        const foundGenres = genres.filter(item => item.id === genresId);
        if (foundGenres.length !== 0) result.push(foundGenres[0]);
      });
    return result;
  }, [genres, activeItem]);

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
        <ActiveItemDescription shouldShow={!!activeItem} /*background={activeItem && activeItem.poster_path} */>
          <ContanerAccordion>
            {/* {console.log(activeItem)} */}
            <PosterWrapper>
              <img src={activeItem && activeItem.poster_path} />
            </PosterWrapper>
            <InformationFilm>
              <TitleAccordion>{activeItem && activeItem.title_fa}</TitleAccordion>
              <TitleAccordion>{activeItem && activeItem.title_en}</TitleAccordion>
              <DescriptionAccordion>
                <RangeAgeStyle>
                  {/* <img src={appropriateAge&&appropriateAge.symbol} /> */}
                  {/* { appropriateAge => agerange && agerange.length >0 && agerange.find(age =>age.id === activeItem && activeItem.age_range)} */}
                  {/* {console.log({appropriateAge})} */}
                  {/* <img src={appropriateAge&&appropriateAge.symbol} />  */}
                </RangeAgeStyle>
                <Genrs>{GnrsData.map(el => el.name).join(', ')}</Genrs>
              </DescriptionAccordion>
              <Button
                type="fullfill"
                label={<FormattedMessage {...messages.moreDetail} />}
                onClick={handleNavigateToPage}
              />
            </InformationFilm>
          </ContanerAccordion>
          <BGImage alt="cover" src={activeItem && activeItem.poster_path} />
          <Dim />
        </ActiveItemDescription>
      </CategorySection>
    </CategoryContext.Provider>
  );
};

export default withRouter(Category);
