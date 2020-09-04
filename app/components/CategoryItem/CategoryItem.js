import React, { useMemo, useCallback } from 'react';
import { useCategoryContext } from '../Category/context';

import { Normal, Special } from './components';
import Img from 'react-cool-img';

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
    // add more condition
    return '187x287';
  }, [isSpecialCategoryItem]);

  const toggleQuikView = useCallback(() => {
    handleActiveItem({ id, poster_path, title_fa, ...rest });
  }, [activeItem]);

  const getTitle = useCallback((t) => {
    return (t.length > 15) ?
    (!t.substring(0, 14).endsWith('..') ? t.substring(0, 14) +
    ' ...' : t.substring(0, 14)) : t
  })
  return (
    <>
      <CategoryItemContainer
        onClick={toggleQuikView}
        quickViewMode={activeItem && activeItem.id === id}
      >
        <CategoryImage>
          <Img width="100%" src={`${poster_path}?size=${IMAGE_SIZE}`} />

          {/* special */}
          {isSpecialCategoryItem && (
            <CategoryItemHoverDetails isSpecial={isSpecialCategoryItem}>
              <h3>{title_fa}</h3>
            </CategoryItemHoverDetails>
          )}
        </CategoryImage>

        {/* normal */}
        {!isSpecialCategoryItem && <ItemTitle>{
          getTitle(title_fa)
          }</ItemTitle>}
      </CategoryItemContainer>
      <CategoryItemActiveNuddle
        shouldShow={activeItem && activeItem.id === id}
      />
    </>
  );
};

export default CategoryItem;
