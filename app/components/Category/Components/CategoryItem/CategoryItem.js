import React, { useMemo, useCallback } from 'react';
import { useCategoryContext } from '../../context';
import {
  CategoryItemContainer,
  CategoryItemHoverDetails,
  CategoryItemActiveNuddle,
  CategoryImage,
  ItemTitle,
} from './styles';

const CategoryItem = ({ id, poster_path, title_fa, ...rest }) => {
  const {
    data: { category, activeItem },
    actions: { handleActiveItem },
  } = useCategoryContext();

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

  /** HANDLERS */
  const toggleQuikView = useCallback(() => {
    handleActiveItem({ id, poster_path, title_fa, ...rest });
  }, [activeItem]);

  return (
    <>
      <CategoryItemContainer onClick={toggleQuikView} quickViewMode={activeItem && activeItem.id === id}>
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

      <CategoryItemActiveNuddle shouldShow={activeItem && activeItem.id === id} />
    </>
  );
};

export default CategoryItem;
