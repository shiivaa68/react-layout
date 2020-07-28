import React, { useCallback } from 'react';

import {
  CheckBoxWrapper,
  CheckboxLabel,
  CheckboxInput,
  CheckboxSpan,
} from './styles';

const Checkbox = ({ id, label, onChange, checked, ...rest }) => {
  const handleCheckboxChange = () => {
    onChange({ id, label, ...rest });
  };

  return (
    <CheckBoxWrapper onChange={handleCheckboxChange}>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" checked={checked} />
        <CheckboxSpan />
      </CheckboxLabel>
      {label}
    </CheckBoxWrapper>
  );
};

export default Checkbox;
