import React, { useCallback } from 'react';
import { Button } from 'components/kit';
import { useFormikContext } from 'formik';
import messages from '../../../../messages';
import { FormattedMessage } from 'react-intl';
import { ButtonTypes } from 'components/kit/Button/constants';

const OTPLoginBtn = ({ handleOTPBtnClick }) => {
  const { values, errors, submitForm } = useFormikContext();

  const onClickHandler = useCallback(
    e => {
      if (values.phoneNumber === '') submitForm();
      e.preventDefault();
      handleOTPBtnClick(values);
    },
    [values],
  );

  return (
    <Button
      id="first_button"
      type={ButtonTypes.TEXT_ONLY}
      label={<FormattedMessage {...messages.otpMessage} />}
      onClick={onClickHandler}
    />
  );
};

export default OTPLoginBtn;
