import React, { useCallback, useMemo } from 'react';
import { FilterNavItemContainer } from './styles';

const FilterNavItem = ({ menuId, name, activeFilterMenuId, handleActiveFilterMenuId }) => {
  const handleSelectActiveItem = useCallback(() => {
    handleActiveFilterMenuId(menuId);
  }, [activeFilterMenuId, handleActiveFilterMenuId]);

  const isActiveMenu = useMemo(() => {
    return menuId === activeFilterMenuId;
  }, [menuId, activeFilterMenuId]);

  return (
    <FilterNavItemContainer onClick={handleSelectActiveItem} isActive={isActiveMenu}>
      {name}
      {isActiveMenu && <i className="fa fa-arrow-left" />}
    </FilterNavItemContainer>
  );
};

export default FilterNavItem;
