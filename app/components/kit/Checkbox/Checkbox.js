import React, { useCallback } from 'react';

import { CheckBoxWrapper, CheckBoxItself } from './styles';

const Checkbox = ({ id, label, onChange, ...rest }) => {
  const handleCheckboxChange = () => {
    onChange({ id, label, ...rest });
  };

  return (
    <CheckBoxWrapper>
      <CheckBoxItself type="checkbox" onChange={handleCheckboxChange} />
      {label}
    </CheckBoxWrapper>
  );
};

export default Checkbox;
