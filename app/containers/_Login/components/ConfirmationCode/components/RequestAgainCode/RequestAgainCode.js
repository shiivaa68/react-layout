import React, { useCallback } from 'react';
import { Button } from 'components/kit';
import messages from '../../../../messages';
import { FormattedMessage } from 'react-intl';
import { ButtonTypes } from 'components/kit/Button/constants';

const RequestAgainCode = ({ handleResendCodeBtnClick }) => {
  const onClickHandler = useCallback(
    e => {
      e.preventDefault();
      handleResendCodeBtnClick();
    },
    [handleResendCodeBtnClick],
  );

  return (
    <Button
      id="first_button"
      type={ButtonTypes.TEXT_ONLY}
      label={<FormattedMessage {...messages.resendCode} />}
      onClick={onClickHandler}
    />
  );
};

export default RequestAgainCode;
