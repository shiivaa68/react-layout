import React, { useState, useMemo, useCallback } from 'react';
import useSearchContext from 'containers/SearchPage/context';
import FilterNavItem from '../FilterNavItem';

import { FilterBoxContainer, SideNav, FilterContent } from './styles';

const FilterBox = () => {
  const {
    data: { sidebarMenuData },
  } = useSearchContext();

  const [activeFilterMenuId, setActiveFilterMenuId] = useState(1);

  const handleActiveFilterMenuId = useCallback(
    menuId => {
      setActiveFilterMenuId(menuId);
    },
    [setActiveFilterMenuId],
  );

  const ActiveMenuContent = useMemo(() => {
    const RelatedComponent = sidebarMenuData.find(
      menuData => menuData.menuId === activeFilterMenuId,
    );
    return RelatedComponent.component;
  }, [activeFilterMenuId]);

  return (
    <FilterBoxContainer>
      <SideNav>
        {sidebarMenuData.map(menuItem => (
          <FilterNavItem
            {...menuItem}
            key={menuItem.menuId}
            activeFilterMenuId={activeFilterMenuId}
            handleActiveFilterMenuId={handleActiveFilterMenuId}
          />
        ))}
      </SideNav>
      <FilterContent>
        <ActiveMenuContent />
      </FilterContent>
    </FilterBoxContainer>
  );
};

export default FilterBox;
