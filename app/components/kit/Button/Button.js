import React, { useMemo } from 'react';
import { ButtonTypes } from './constants';
import { ButtonComponent } from './styles';

const Button = ({ type, label, onClick }) => {
  const btnProps = useMemo(() => {
    const options = { custom_btn: true };

    switch (type) {
      case ButtonTypes.FILLED:
        options.filled = true;
        break;

      case ButtonTypes.OUTLINED:
        options.outlined = true;
        break;

      case ButtonTypes.TEXT_ONLY:
        options.text_only = true;
        break;

        break;
    }
    return options;
  }, [type]);

  return (
    <ButtonComponent onClick={onClick} {...btnProps}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
