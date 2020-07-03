import React, { useMemo } from 'react';
import { Normal, Special } from './components';

import { CategoryItemContainer, CategoryItemHoverDetails, CategoryImage, ItemTitle } from './styles';

const CategoryItem = ({ category, poster_path, title_fa, ...rest }) => {
  // console.log({ ...rest });

  const isSpecialCategoryItem = useMemo(() => {
    const { style } = category;
    switch (style) {
      case 'normal':
        return false;

      case 'special':
        return true;

      default:
        return false;
    }
  }, [category]);

  /** IMAGE_SIZE */
  const IMAGE_SIZE = useMemo(() => {
    if (isSpecialCategoryItem) return '420x840';
    // some other conditions
    else return '216x331';
  }, [isSpecialCategoryItem]);

  return (
    <CategoryItemContainer>
      <CategoryImage>
        <img width="100%" src={`${poster_path}?size=${IMAGE_SIZE}`} />

        {/** اگر اسپشیال بود توی هاورش تایتلشو نشون بدع */}
        {isSpecialCategoryItem && (
          <CategoryItemHoverDetails isSpecial={isSpecialCategoryItem}>
            <h3>{title_fa}</h3>
          </CategoryItemHoverDetails>
        )}
      </CategoryImage>

      {/** اگر اسپشیال نبودعععع بیا زیرش نشون بدغ */}
      {!isSpecialCategoryItem && <ItemTitle>{title_fa}</ItemTitle>}
    </CategoryItemContainer>
  );
};

export default CategoryItem;
