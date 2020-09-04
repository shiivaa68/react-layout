import React, { useRef, useCallback, useMemo, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { withRouter } from 'react-router-dom';
import { PublicRoutes } from 'utils/routes';
import CategoryItem from '../CategoryItem';
import CategoryContext from './context';
import IMDB from '../../images/imdb.svg';
import Img from 'react-cool-img';

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
  TitleAccordionFa,
  DescriptionAccordion,
  BGImage,
  Dim,
  StyleInformation,
  GenresStyle,
  StyleImdb,
} from './styles';
import useMyMediaQuery from '../../utils/useMyMediaQuery';

const Category = ({ history, category, items }) => {

  const { push } = history;
  const { isMobile } = useMyMediaQuery();
  const swpierRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);



  const { country = [] } = useSelector(state => state.global);
  const { agerange = [] } = useSelector(state => state.global);
  const { genres = [] } = useSelector(state => state.global);

  /** SLIDER OPTIONS */
  const SliderOptions = useMemo(() => {
    const opt = {};

    opt.lazy = true;
    opt.slidesPerView = isMobile ? 3 : 7;
    opt.spaceBetween = 10;
    opt.rebuildOnUpdate =true;
    return opt;
  }, [category, items, isMobile]);

  useEffect(() => {
    // console.log({ activeItem });
  }, [activeItem]);

  useEffect(() => {
  
  }, [country, agerange, genres]);

  const accordion = useRef(null)

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
      else {
        if (isMobile) handleNavigateToPage(selectedItem);
        else {
          setActiveItem(selectedItem);
          // window.scrollBy({
          //   top: accordion.current.offsetTop, 
          //   left: 0, 
          //   behavior: 'auto'
          //   });
        }
      };
    },
    [activeItem],
  );

  const handleNavigateToPage = useCallback((e) => {
    const { id, is_series } = e.id ? e : activeItem;
    if (is_series) push(PublicRoutes.seriesDetailRoute(id));
    else push(PublicRoutes.movieDetailRoute(id));
  }, [activeItem]);

  const GnrsData = useMemo(() => {

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


  const CountryFilm = useMemo(()=>{
   
    const itemCountry = activeItem && activeItem.country;
    const foundCountry = country && country.length>0 && country.find(countryElement => countryElement.country_code === itemCountry);
      return foundCountry;
  },[country,activeItem]);

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
        {
          !isMobile && <ActiveItemDescription ref={accordion} shouldShow={!!activeItem} /*background={activeItem && activeItem.poster_path} */>
          <ContanerAccordion>
            <PosterWrapper>
              <Img src={activeItem && activeItem.poster_path} />
            </PosterWrapper>
              <InformationFilm>
              <TitleAccordionFa>{activeItem && activeItem.title_fa}</TitleAccordionFa>
              <TitleAccordion>{activeItem && activeItem.title_en}</TitleAccordion>
              <DescriptionAccordion>
            
               <StyleInformation>
                 <div>{CountryFilm &&CountryFilm.country_fa}</div>
                 <div>{activeItem&&activeItem. publish_date}</div> 
                 <Img src={IMDB} width="40" height="40"/><div>{activeItem&&activeItem.imdb_rank}</div>
               </StyleInformation>
              <GenresStyle>
                <span>  
                {<FormattedMessage {...messages.genres} />}:
                </span>
                <span>{GnrsData.map(el => el.name).join(', ')}</span>
             </GenresStyle>

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
        }
      </CategorySection>
    </CategoryContext.Provider>
  );
};

export default withRouter(Category);
