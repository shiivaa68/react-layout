import React, { useCallback } from 'react';
import { Button } from 'components/kit';
import messages from '../../../../messages';
import { FormattedMessage } from 'react-intl';
import { ButtonTypes } from 'components/kit/Button/constants';

const FORGETPassBtn = ({ handleFORGETBtnClick }) => {
  const onClickHandler = useCallback(
    e => {
      e.preventDefault();
      handleFORGETBtnClick();
    },
    [handleFORGETBtnClick],
  );

  return (
    <Button
      id="first_button"
      type={ButtonTypes.TEXT_ONLY}
      label={<FormattedMessage {...messages.forgetPassword} />}
      onClick={onClickHandler}
    />
  );
};

export default FORGETPassBtn;
