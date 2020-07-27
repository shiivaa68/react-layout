import React, { useCallback } from 'react';

import { CheckBoxWrapper, CheckBoxItself } from './styles';

const Checkbox = ({ id, label, onChange, checked, ...rest }) => {
  const handleCheckboxChange = () => {
    onChange({ id, label, ...rest });
  };

  return (
    <CheckBoxWrapper>
      <CheckBoxItself
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {label}
    </CheckBoxWrapper>
  );
};

export default Checkbox;
