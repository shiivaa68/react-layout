import React, { useCallback } from 'react';
import { Button } from 'components/kit';
import messages from '../../../../messages';
import { FormattedMessage } from 'react-intl';
import { ButtonTypes } from 'components/kit/Button/constants';

const BackStepOne = ({ handleBackBtnClick }) => {
  const onClickHandler = useCallback(
    e => {
      e.preventDefault();
      handleBackBtnClick();
      
    },
    [handleBackBtnClick],
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

export default BackStepOne;
