import React, { useCallback } from 'react';


import { CheckBoxWrapper,CheckboxLabel,CheckboxInput,CheckboxSpan } from './styles';

const Checkbox = ({ id, label, onChange,checked,...rest }) => {
  const handleCheckboxChange = () => {
    onChange({ id, label, ...rest });
  };

  return (
    <CheckBoxWrapper >
    <CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked}   onChange={handleCheckboxChange}/>
      <CheckboxSpan />
    </CheckboxLabel>
    {label}
  </CheckBoxWrapper>
  );
};

export default Checkbox;