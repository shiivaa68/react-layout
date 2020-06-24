import React from 'react';

const Button = ({ type = 'filled', label = 'nothing' }) => {
  return <button>{label}</button>;
};

export default Button;
