import React, { useMemo } from 'react';
import Swiper from 'react-id-swiper';

import {
  CategorySection,
  CategoryHeading,
  CategoryBody,
  Heading,
  ShowMore,
  FooterCategory,
} from './styles';

const Category = ({ category, items }) => {
  const options = useMemo(() => {
    const opt = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    opt.lazy = true;
    opt.slidesPerView = 7;
    opt.spaceBetween = 10;

    return opt;
  }, [category, items]);

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
        {items.length > 0 && (
          <Swiper {...options}>
            {items.map(item => (
              <div key={item.id}>
                <img width="100%" src={`${item.poster_path}?size=166x248`} />
                <FooterCategory>{item.title_fa}</FooterCategory>
              </div>
            ))}
          </Swiper>
        )}
      </CategoryBody>
    </CategorySection>
  );
};

export default Category;
