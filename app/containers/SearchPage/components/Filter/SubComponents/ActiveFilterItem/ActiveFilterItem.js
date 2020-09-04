import React from 'react';
import useSearchContext from 'containers/SearchPage/context';
import CLOSE_ICON from 'images/close.svg';
import RELOAD_ICON from 'images/refresh.svg';
import { ActiveFilterItemBox, Reaload_IMG, Close_IMG } from './styles';

const ActiveFilterItem = ({ id, name, category, isSingleChoise, ...rest }) => {
  const {
    action: { handleGeneralResetFilter },
  } = useSearchContext();

  return (
    <ActiveFilterItemBox>
      {name}

      <Close_IMG
        src={CLOSE_ICON}
        alt="close icon"
        onClick={() => handleGeneralResetFilter({ category, id, name })}
      />
    </ActiveFilterItemBox>
  );
};

export default ActiveFilterItem;
