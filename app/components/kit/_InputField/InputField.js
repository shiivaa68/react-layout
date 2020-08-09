import React from 'react';

import { InputWrapper, InputLabel, Input } from './styles';

const InputField = ({ type, name, label, placeholder, value, onChange }) => {
  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default InputField;
