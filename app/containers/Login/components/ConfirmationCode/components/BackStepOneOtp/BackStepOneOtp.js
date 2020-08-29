import React, { useCallback } from 'react';
import { Button } from 'components/kit';
import messages from '../../../../messages';
import { FormattedMessage } from 'react-intl';
import { ButtonTypes } from 'components/kit/Button/constants';

const BackStepOneOtp = ({ handleBackOtpBtnClick }) => {
  const onClickHandler = useCallback(
    e => {
      e.preventDefault();
      handleBackOtpBtnClick();
      console.log(e);
    },
    [handleBackOtpBtnClick],
  );

  return (
    <Button
      id="first_button"
      type={ButtonTypes.TEXT_ONLY}
      label={<FormattedMessage {...messages.backWard} />}
      onClick={onClickHandler}
    />
  );
};

export default BackStepOneOtp;
